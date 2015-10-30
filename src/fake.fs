[<ReflectedDefinition>]
module Ionide.Fake

open System
open System.Text.RegularExpressions
open FunScript
open FunScript.TypeScript
open FunScript.TypeScript.fs
open FunScript.TypeScript.child_process
open FunScript.TypeScript.AtomCore
open FunScript.TypeScript.text_buffer
open Atom
open Atom.FSharp

[<ReflectedDefinition>]
module FakeService =
    type BuildData = {Name : string; Start : DateTime; mutable End : DateTime option; mutable Output : string; mutable TextEditor : IEditor option; Process : ChildProcess}

    let mutable linuxPrefix = ""
    let mutable command = ""
    let mutable script = ""
    let mutable parameters : string[]= [||]

    //let mutable private File : (string * string) option = None
    let mutable private taskListView : (atom.SelectListView * IPanel) option = None
    let mutable private buildListView : (atom.SelectListView * IPanel) option = None
    let mutable private cancelListView : (atom.SelectListView * IPanel) option = None
    let mutable private BuildList = ResizeArray()


    let private viewForItem (desc : ListView.ItemDescription) =
        if JS.isDefined desc then
            sprintf "<li>%s</li>" desc.data |> jq
        else
            "<li></li>" |> jq

    let private startBuild (packageDescription :  ListView.ItemDescription) =
        let fakeProcess = Process.spawnWithNotifications command linuxPrefix packageDescription.data
        let data = {Name = packageDescription.data; Start = DateTime.Now; End = None; Output = ""; TextEditor = None; Process = fakeProcess}
        BuildList.Add data
        fakeProcess.on("exit",unbox<Function>(fun _ -> data.End <- Some DateTime.Now)) |> ignore
        fakeProcess.stdout.on("data", unbox<Function>(fun e ->
            data.Output <- data.Output + e.ToString()
            data.TextEditor |> Option.iter (fun te ->
                let b = te.getBuffer()
                e.ToString() |> b.append |> ignore
                )
            )) |> ignore
        fakeProcess.stderr.on("data", unbox<Function>(fun e ->
            data.Output <- data.Output + e.ToString()
            data.TextEditor |> Option.iter (fun te ->
                let b = te.getBuffer()
                e.ToString() |> b.append |> ignore
            )
        )) |> ignore

        ()

    let private registerTaskList () =
        let stopChangingCallback (ev : IEditor) (lv : atom.SelectListView) = fun () -> ()
        let cancelledCallback = Func<_>(fun _ -> taskListView |> Option.iter(fun (model, view) ->  view.hide()) :> obj)
        let confirmedCallback = unbox<Func<_, _>> (fun (packageDescription : ListView.ItemDescription) ->
            taskListView |> Option.iter (fun (model, view) -> view.hide())
            startBuild packageDescription
        )
        ListView.registerListView stopChangingCallback cancelledCallback confirmedCallback viewForItem false

    let private registerBuildList () =
        let stopChangingCallback (ev : IEditor) (lv : atom.SelectListView) = fun () -> ()
        let cancelledCallback = Func<_>(fun _ -> buildListView |> Option.iter(fun (model, view) ->  view.hide()) :> obj)
        let confirmedCallback = unbox<Func<_, _>> (fun (buildDescription : ListView.ItemDescription) ->
            buildListView |> Option.iter (fun (model, view) -> view.hide())
            let build = BuildList |> Seq.find(fun n ->
                let dateString = n.Start.ToShortDateString().Replace("\\",".").Replace("/",".")
                let timeString = n.Start.ToShortTimeString().Replace("\\",".").Replace("/", ".")
                let desc = sprintf "%s - %s %s" n.Name dateString timeString
                desc = buildDescription.data)

            Globals.atom.workspace._open(buildDescription.data, {split = "right"})._done((fun ed ->
                build.TextEditor <- Some ed
                ed.insertText build.Output |> ignore
                ed.onDidDestroy((fun _ -> build.TextEditor <- None) |> unbox<Function>) |> ignore
                let view = Globals.atom.views.getView ed
                setComponentEnabled(view, false)) |> unbox<Function>)
            ()
        )
        ListView.registerListView stopChangingCallback cancelledCallback confirmedCallback viewForItem false

    let private registerCancelList () =
        let stopChangingCallback (ev : IEditor) (lv : atom.SelectListView) = fun () -> ()
        let cancelledCallback = Func<_>(fun _ -> cancelListView |> Option.iter(fun (model, view) ->  view.hide()) :> obj)
        let confirmedCallback = unbox<Func<_, _>> (fun (buildDescription : ListView.ItemDescription) ->
            cancelListView |> Option.iter (fun (model, view) -> view.hide())
            let build = BuildList |> Seq.find(fun n ->
                let dateString = n.Start.ToShortDateString().Replace("\\",".").Replace("/",".")
                let timeString = n.Start.ToShortTimeString().Replace("\\",".").Replace("/", ".")
                let desc = sprintf "%s - %s %s" n.Name dateString timeString
                desc = buildDescription.data)
            if Process.isWin () then
                Process.spawnSame "taskkill" ("/pid " + build.Process.pid.ToString() + " /f /t")
                |> ignore
            else
                build.Process.kill ()
            build.End <- Some DateTime.Now
        )
        ListView.registerListView stopChangingCallback cancelledCallback confirmedCallback viewForItem false


    let private loadParameters () =
        let p = Globals.atom.project.getPaths().[0]
        linuxPrefix <- Settings.loadOrDefault (fun s -> s.Fake.linuxPrefix ) "sh"
        command <- Settings.loadOrDefault (fun s -> p + "/" + s.Fake.command ) (if Process.isWin () then p + "/" + "build.cmd" else p + "/" + "build.sh")
        script <- Settings.loadOrDefault (fun s -> p + "/" + s.Fake.build )  (p + "/" + "build.fsx")
        ()

    let private FAKENotFound () =
        Process.notice (ref None) true "FAKE error" "FAKE script not found"

    let private BuildTask () =
        loadParameters ()
        if Globals.existsSync script |> not || Globals.existsSync command |> not then
            FAKENotFound ()
        else
            taskListView |> Option.iter(fun (model, view) ->
            view.show()
            model.focusFilterEditor() |> ignore
            let script = script |> Globals.readFileSync
                                |> fun n -> n.toString()
            let matches = Regex.Matches(script, "Target \"([\\w.]+)\"") |> Seq.cast<Match> |> Seq.toArray
            let m = matches |> Array.map(fun m -> {ListView.data = m.Groups.[1].Value} :> obj)
            model.setItems m |> ignore
            ()
        )

    let private BuildDefault () =
        loadParameters ()
        if Globals.existsSync script |> not || Globals.existsSync command |> not  then
            FAKENotFound ()
        else
            let packageDescription = {ListView.data = "" }
            startBuild packageDescription

    let private ShowBuildList () =
        buildListView |> Option.iter(fun (model, view) ->
            view.show()
            model.focusFilterEditor() |> ignore
            let m = BuildList
                    |> Seq.sortBy(fun n -> n.Start)
                    |> Seq.map(fun n ->
                        let dateString = n.Start.ToShortDateString().Replace("\\",".").Replace("/",".")
                        let timeString = n.Start.ToShortTimeString().Replace("\\",".").Replace("/", ".")

                        let name = sprintf "%s - %s %s" n.Name dateString timeString
                        {ListView.data = name } :> obj)
                    |> Seq.toArray
                    |> Array.rev

            model.setItems m |> ignore
            ()
        )

    let private ShowCancelList () =
        cancelListView |> Option.iter(fun (model, view) ->
            view.show()
            model.focusFilterEditor() |> ignore
            let m = BuildList
                    |> Seq.filter (fun n -> n.End.IsNone)
                    |> Seq.sortBy(fun n -> n.Start)
                    |> Seq.map(fun n ->
                        let dateString = n.Start.ToShortDateString().Replace("\\",".").Replace("/",".")
                        let timeString = n.Start.ToShortTimeString().Replace("\\",".").Replace("/", ".")

                        let name = sprintf "%s - %s %s" n.Name dateString timeString
                        {ListView.data = name } :> obj)
                    |> Seq.toArray
                    |> Array.rev

            model.setItems m |> ignore
            ()
        )

    let activate () =
        taskListView <- registerTaskList () |> Some
        buildListView <- registerBuildList () |> Some
        cancelListView <- registerCancelList () |> Some
        Globals.atom.commands.add("atom-workspace", "FAKE:Build", BuildTask |> unbox<Function>) |> ignore
        Globals.atom.commands.add("atom-workspace", "FAKE:Build-Default", BuildDefault |> unbox<Function>) |> ignore
        Globals.atom.commands.add("atom-workspace", "FAKE:Show-Builds", ShowBuildList |> unbox<Function>) |> ignore
        Globals.atom.commands.add("atom-workspace", "FAKE:Cancel Build", ShowCancelList |> unbox<Function>) |> ignore


type Fake() =


    member x.activate(state:obj) =
        FakeService.activate ()
        ()

    member x.deactivate() =
        ()
