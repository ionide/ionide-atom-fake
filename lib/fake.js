var CompositeDisposable = require('atom').CompositeDisposable;
var child_process = require('child_process');
window.$ = require('jquery');
var fs = require('fs');
var atomSpaceView = require('atom-space-pen-views');

function wrappedFunScript() { 
var list_1_String____NilString___, list_1_String____ConsString___, list_1_Int32__NilInt32, list_1_Int32__ConsInt32, ViewsHelpers__jq_$, ViewsHelpers__jqC$, ViewsHelpers__jq$, UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___, UnfoldEnumerator_2_Int32__Match___ctor$Int32_Match_1, UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32, UnfoldEnumerator_2_Int32__BuildData___ctor$Int32_BuildData_, UnfoldEnumerator_2_IEnumerator_1_BuildData__Object___ctor$IEnumerator_1_BuildData__Object_, UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___, UnfoldEnumerator_2_FSharpList_1_Int32__Int32___ctor$FSharpList_1_Int32__Int32, TupleString____Int32, TupleString____FSharpList_1_String___, TupleString_String, TupleSelectListView__IPanel_, TupleObject__IEnumerator_1_BuildData_, TupleMatch_1_Int32, TupleInt32_Int32, TupleInt32_FSharpList_1_Int32_, TupleBuildData__Int32, String__StartsWith$, String__SplitWithoutOptions$, String__Replace$, String__PrintFormatToString$, Seq__Unfold$Int32__String___Int32_String___, Seq__Unfold$Int32__Match_1Int32_Match_1, Seq__Unfold$Int32__Int32_Int32_Int32, Seq__Unfold$Int32__BuildData_Int32_BuildData_, Seq__Unfold$IEnumerator_1_BuildData__Object_IEnumerator_1_BuildData__Object_, Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___, Seq__Unfold$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32, Seq__TryPickIndexedAux$BuildData__BuildData_BuildData__BuildData_, Seq__TryPickIndexed$BuildData__BuildData_BuildData__BuildData_, Seq__TryFindIndexed$BuildData_BuildData_, Seq__ToList$Int32_Int32, Seq__ToArray$String___String___, Seq__ToArray$Object_Object_, Seq__ToArray$Match_1Match_1, Seq__ToArray$BuildData_BuildData_, Seq__SortBy$BuildData__DateTime_1BuildData__DateTime_1, Seq__OfList$String___String___, Seq__OfList$Int32_Int32, Seq__OfArray$String___String___, Seq__OfArray$BuildData_BuildData_, Seq__Map$BuildData__Object_BuildData__Object_, Seq__IterateIndexed$String___String___, Seq__IterateIndexed$Object_Object_, Seq__IterateIndexed$Match_1Match_1, Seq__IterateIndexed$BuildData_BuildData_, Seq__Iterate$Int32_Int32, Seq__FromFactory$String___String___, Seq__FromFactory$Object_Object_, Seq__FromFactory$Match_1Match_1, Seq__FromFactory$Int32_Int32, Seq__FromFactory$BuildData_BuildData_, Seq__FoldIndexedAux$Unit__String___Unit__String___, Seq__FoldIndexedAux$Unit__Object_Unit__Object_, Seq__FoldIndexedAux$Unit__Match_1Unit__Match_1, Seq__FoldIndexedAux$Unit__Int32_Unit__Int32, Seq__FoldIndexedAux$Unit__BuildData_Unit__BuildData_, Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32, Seq__FoldIndexed$String____Unit_String____Unit_, Seq__FoldIndexed$Object__Unit_Object__Unit_, Seq__FoldIndexed$Match_1_Unit_Match_1_Unit_, Seq__FoldIndexed$Int32__Unit_Int32_Unit_, Seq__FoldIndexed$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_, Seq__FoldIndexed$BuildData__Unit_BuildData__Unit_, Seq__Fold$Int32__Unit_Int32_Unit_, Seq__Fold$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_, Seq__FindIndexed$BuildData_BuildData_, Seq__Find$BuildData_BuildData_, Seq__Enumerator$String___String___, Seq__Enumerator$Object_Object_, Seq__Enumerator$Match_1Match_1, Seq__Enumerator$Int32_Int32, Seq__Enumerator$BuildData_BuildData_, Seq__Delay$Object_Object_, Seq__Cast$Match_1Match_1, ResizeArray__ToSeq$BuildData_BuildData_, ResizeArray_1_Object__get_Item$Object_, ResizeArray_1_Object__get_Count$Object_, Regex__MatchesWithOffset$, Regex__MatchesStatic$, Regex__Matches$, Regex__MatchCollectionToSeq$, Regex__Create$, Range__oneStep$Int32_Int32, Range__customStep$Int32__Int32_Int32_Int32, Process__spawnWithNotifications$, Process__notice$, Process__isWin$, Process__handleExit$INotification_INotification_, Process__handle$Object_Object_, PanelOptions___ctor$, Options___ctor$, Option__Iterate$Tuple_2_String__String_Tuple_2_String__String_, Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_, Option__Iterate$INotification_INotification_, Option__Iterate$IEditor_IEditor_, Option__IsSome$Tuple_2_String__String_Tuple_2_String__String_, Option__IsSome$Int32_Int32, Option__IsSome$IEnumerator_1_BuildData_IEnumerator_1_BuildData_, Option__IsSome$FSharpList_1_String___FSharpList_1_String___, Option__IsSome$FSharpList_1_Int32_FSharpList_1_Int32_, Option__IsNone$Tuple_2_String__String_Tuple_2_String__String_, Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_, Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___, Option__GetValue$Tuple_2_String__String_Tuple_2_String__String_, Option__GetValue$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_, Option__GetValue$Tuple_2_Object__IEnumerator_1_BuildData_Tuple_2_Object__IEnumerator_1_BuildData_, Option__GetValue$Tuple_2_Match__Int32_Tuple_2_Match__Int32_, Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_, Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_, Option__GetValue$Tuple_2_BuildData__Int32_Tuple_2_BuildData__Int32_, Option__GetValue$String_1String, Option__GetValue$Int32_Int32, Option__GetValue$INotification_INotification_, Option__GetValue$IEnumerator_1_BuildData_IEnumerator_1_BuildData_, Option__GetValue$IEditor_IEditor_, Option__GetValue$FSharpList_1_String___FSharpList_1_String___, Option__GetValue$FSharpList_1_Int32_FSharpList_1_Int32_, Option__GetValue$BuildData_BuildData_, OpenEditorOptions___ctor$, NotificationsOptions___ctor$, Match__get_Groups$, MatchCollection__get_Item$, MatchCollection__get_Count$, List__Tail$String___String___, List__Tail$Int32_Int32, List__Reverse$Int32_Int32, List__Head$String___String___, List__Head$Int32_Int32, List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32, List__FoldIndexed$Int32__list_1_Int32_Int32_list_1_Int32_, List__Fold$Int32__list_1_Int32_Int32_list_1_Int32_, List__Empty$String___String___, List__Empty$Int32_Int32, List__CreateCons$String___String___, List__CreateCons$Int32_Int32, ListView__regiterListView$FSharpFunc_2_ItemDescription__JQuery_FSharpFunc_2_ItemDescription__JQuery_, ItemDescription___ctor$, GroupCollection__get_Item$, Fake__deactivate$, Fake__activate$, Fake___ctor$, FakeService__viewForItem$, FakeService__taskListView, FakeService__startBuild$, FakeService__registerTaskList$, FakeService__registerBuildList$, FakeService__get_taskListView$, FakeService__get_buildListView$, FakeService__get_File$, FakeService__get_BuildList$, FakeService__buildListView, FakeService__activate$, FakeService__ShowBuildList$, FakeService__File, FakeService__FAKENotFound$, FakeService__BuildTask$, FakeService__BuildList, FakeService__BuildDefault$, DateTime__get_Now$, DateTime__createUnsafe$, DateTime__ToShortTimeString$, DateTime__ToShortDateString$, DateTime__Compare$, CreateEnumerable_1_String_____ctor$String___, CreateEnumerable_1_Object___ctor$Object_, CreateEnumerable_1_Match___ctor$Match_1, CreateEnumerable_1_Int32___ctor$Int32, CreateEnumerable_1_BuildData___ctor$BuildData_, CompareTo, Capture__get_Value$, Capture__getValue$, BuildData___ctor$, Array__ZeroCreate$String___String___, Array__ZeroCreate$Object_Object_, Array__ZeroCreate$Match_1Match_1, Array__ZeroCreate$BuildData_BuildData_, Array__TryPickIndexedAux$String_1_String_1String_String, Array__TryPickIndexed$String_1_String_1String_String, Array__TryFind$String_1String, Array__SortInPlaceWith$BuildData_BuildData_, Array__SortInPlaceBy$BuildData__DateTime_1BuildData__DateTime_1, Array__Reverse$Object_Object_, Array__MapIndexed$String_1_String___String_String___, Array__MapIndexed$Match_1_Object_Match_1_Object_, Array__Map$String_1_String___String_String___, Array__Map$Match_1_Object_Match_1_Object_, Array__Length$String_1String, Array__Length$Object_Object_, Array__Length$Match_1Match_1, Array__FoldIndexed$String____String_1String____String, Array__Fold$String_1_String___String_String___, Array__ConcatImpl$String_1String, Array__Concat$String_1String, Array__BoxedLength$;
Array__BoxedLength$ = (function(xs)
{
    return xs.length;;
});
Array__Concat$String_1String = (function(xs)
{
    return Array__ConcatImpl$String_1String(Seq__ToArray$String___String___(xs));
});
Array__ConcatImpl$String_1String = (function(xss)
{
    return [].concat.apply([], xss);;
});
Array__Fold$String_1_String___String_String___ = (function(f,seed,xs)
{
    return Array__FoldIndexed$String____String_1String____String((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Array__FoldIndexed$String____String_1String____String = (function(f,seed,xs)
{
    var acc = seed;
    for (var i = 0; i <= (Array__Length$String_1String(xs) - 1); i++)
    {
      acc = f(i)(acc)(xs[i]);
      null;
    };
    return acc;
});
Array__Length$Match_1Match_1 = (function(xs)
{
    return xs.length;;
});
Array__Length$Object_Object_ = (function(xs)
{
    return xs.length;;
});
Array__Length$String_1String = (function(xs)
{
    return xs.length;;
});
Array__Map$Match_1_Object_Match_1_Object_ = (function(f,xs)
{
    return Array__MapIndexed$Match_1_Object_Match_1_Object_((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
});
Array__Map$String_1_String___String_String___ = (function(f,xs)
{
    return Array__MapIndexed$String_1_String___String_String___((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
});
Array__MapIndexed$Match_1_Object_Match_1_Object_ = (function(f,xs)
{
    var ys = Array__ZeroCreate$Object_Object_(Array__Length$Match_1Match_1(xs));
    for (var i = 0; i <= (Array__Length$Match_1Match_1(xs) - 1); i++)
    {
      ys[i] = f(i)(xs[i]);
      null;
    };
    return ys;
});
Array__MapIndexed$String_1_String___String_String___ = (function(f,xs)
{
    var ys = Array__ZeroCreate$String___String___(Array__Length$String_1String(xs));
    for (var i = 0; i <= (Array__Length$String_1String(xs) - 1); i++)
    {
      ys[i] = f(i)(xs[i]);
      null;
    };
    return ys;
});
Array__Reverse$Object_Object_ = (function(xs)
{
    var size = Array__Length$Object_Object_(xs);
    var ys = Array__ZeroCreate$Object_Object_(size);
    for (var i = 0; i <= (size - 1); i++)
    {
      ys[i] = xs[((size - 1) - i)];
      null;
    };
    return ys;
});
Array__SortInPlaceBy$BuildData__DateTime_1BuildData__DateTime_1 = (function(f,xs)
{
    return Array__SortInPlaceWith$BuildData_BuildData_((function(x)
    {
      return (function(y)
      {
        var _x = f(x);
        var _y = f(y);
        return (CompareTo(_x, _y));
      });
    }), xs);
});
Array__SortInPlaceWith$BuildData_BuildData_ = (function(f,xs)
{
    xs.sort(function($a,$b) { return f($a)($b); });;
});
Array__TryFind$String_1String = (function(f,xs)
{
    return Array__TryPickIndexed$String_1_String_1String_String((function(_arg1)
    {
      return (function(x)
      {
        if (f(x)) 
        {
          return {Tag: 1.000000, Value: x};
        }
        else
        {
          return {Tag: 0.000000};
        };
      });
    }), xs);
});
Array__TryPickIndexed$String_1_String_1String_String = (function(f,xs)
{
    return Array__TryPickIndexedAux$String_1_String_1String_String(f, 0, xs);
});
Array__TryPickIndexedAux$String_1_String_1String_String = (function(f,i,xs)
{
    if ((i == Array__Length$String_1String(xs))) 
    {
      return {Tag: 0.000000};
    }
    else
    {
      var result = f(i)(xs[i]);
      if ((result.Tag == 0.000000)) 
      {
        return Array__TryPickIndexedAux$String_1_String_1String_String(f, (i + 1), xs);
      }
      else
      {
        return result;
      };
    };
});
Array__ZeroCreate$BuildData_BuildData_ = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$Match_1Match_1 = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$Object_Object_ = (function(size)
{
    return new Array(size);;
});
Array__ZeroCreate$String___String___ = (function(size)
{
    return new Array(size);;
});
BuildData___ctor$ = (function(Name,Start,End,Output,TextEditor)
{
    var __this = this;
    __this.Name = Name;
    __this.Start = Start;
    __this.End = End;
    __this.Output = Output;
    __this.TextEditor = TextEditor;
});
Capture__getValue$ = (function(x)
{
    return Array.isArray(x) ? (x[0]) : x;
});
Capture__get_Value$ = (function(x,unitVar1)
{
    return Capture__getValue$(x);
});
CompareTo = (function(dt,that)
{
    return DateTime__Compare$(dt, that);
});
CreateEnumerable_1_BuildData___ctor$BuildData_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_Int32___ctor$Int32 = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_Match___ctor$Match_1 = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_Object___ctor$Object_ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
CreateEnumerable_1_String_____ctor$String___ = (function(factory)
{
    var __this = this;
    {};
    __this.factory = factory;
});
DateTime__Compare$ = (function(a,b)
{
    return (a.getTime() < b.getTime() ? -1 : (a.getTime() == b.getTime() ? 0 : 1));
});
DateTime__ToShortDateString$ = (function(dt,unitVar1)
{
    return dt['to'+"LocaleDate"+'String']();
});
DateTime__ToShortTimeString$ = (function(dt,unitVar1)
{
    return dt.toLocaleTimeString().replace(/:\d\d(?!:)/, '');
});
DateTime__createUnsafe$ = (function(value,kind)
{
    var date = value == null ? new Date() : new Date(value);
    if (isNaN(date)) { throw "The string was not recognized as a valid DateTime." }
    date.kind = kind;
    return date;
});
DateTime__get_Now$ = (function(unitVar0)
{
    return DateTime__createUnsafe$(null, 2);
});
FakeService__BuildDefault$ = (function(unitVar0)
{
    var packageDescription = (new ItemDescription___ctor$(""));
    return FakeService__startBuild$(packageDescription);
});
FakeService__BuildTask$ = (function(unitVar0)
{
    return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
    {
      var model = tupledArg.Items[0.000000];
      var view = tupledArg.Items[1.000000];
      return Option__Iterate$Tuple_2_String__String_Tuple_2_String__String_((function(_tupledArg)
      {
        var build = _tupledArg.Items[0.000000];
        var fake = _tupledArg.Items[1.000000];
        (view.show());
        var ignored0 = (model.focusFilterEditor());
        var script = ((fs.readFileSync(fake)).toString());
        var matches = Seq__ToArray$Match_1Match_1(Seq__Cast$Match_1Match_1(Regex__MatchCollectionToSeq$(Regex__MatchesStatic$(script, "Target \"([\\w.]+)\""))));
        var m = Array__Map$Match_1_Object_Match_1_Object_((function(_m)
        {
          return (new ItemDescription___ctor$(Capture__get_Value$(GroupCollection__get_Item$(Match__get_Groups$(_m), 1))));
        }), matches);
        var _ignored0 = (model.setItems(m));
      }), FakeService__File);
    }), FakeService__taskListView);
});
FakeService__FAKENotFound$ = (function(unitVar0)
{
    return Process__notice$({contents: {Tag: 0.000000}}, true, "FAKE error", "FAKE script not found");
});
FakeService__ShowBuildList$ = (function(unitVar0)
{
    return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
    {
      var model = tupledArg.Items[0.000000];
      var view = tupledArg.Items[1.000000];
      (view.show());
      var ignored0 = (model.focusFilterEditor());
      var m = Array__Reverse$Object_Object_(Seq__ToArray$Object_Object_(Seq__Map$BuildData__Object_BuildData__Object_((function(n)
      {
        var dateString = String__Replace$(String__Replace$(DateTime__ToShortDateString$(n.Start), "\\", "."), "/", ".");
        var timeString = String__Replace$(String__Replace$(DateTime__ToShortTimeString$(n.Start), "\\", "."), "/", ".");
        var clo1 = String__PrintFormatToString$("%s - %s %s");
        var name = (function(arg10)
        {
          var clo2 = clo1(arg10);
          return (function(arg20)
          {
            var clo3 = clo2(arg20);
            return (function(arg30)
            {
              return clo3(arg30);
            });
          });
        })(n.Name)(dateString)(timeString);
        return (new ItemDescription___ctor$(name));
      }), Seq__SortBy$BuildData__DateTime_1BuildData__DateTime_1((function(n)
      {
        return n.Start;
      }), ResizeArray__ToSeq$BuildData_BuildData_(FakeService__BuildList)))));
      var _ignored0 = (model.setItems(m));
    }), FakeService__buildListView);
});
FakeService__activate$ = (function(unitVar0)
{
    FakeService__taskListView = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })(FakeService__registerTaskList$());
    FakeService__buildListView = (function(arg0)
    {
      return {Tag: 1.000000, Value: arg0};
    })(FakeService__registerBuildList$());
    var p = (((window.atom).project).getPaths())[0];
    var proj = (function(ex)
    {
      return (function(arr)
      {
        var _979;
        if (Process__isWin$()) 
        {
          _979 = "cmd";
        }
        else
        {
          _979 = "sh";
        };
        var ext = _979;
        var _981;
        if ((arr != undefined)) 
        {
          _981 = Array__TryFind$String_1String((function(a)
          {
            return (function(n)
            {
              return ((n != undefined) && (n[(Array__BoxedLength$(n) - 1)] == ext));
            })(String__SplitWithoutOptions$(a, ["."]));
          }), arr);
        }
        else
        {
          _981 = {Tag: 0.000000};
        };
        var projExist = _981;
        if ((projExist.Tag == 0.000000)) 
        {
          var ignored0 = (((window.atom).commands).add("atom-workspace", "FAKE: Build", (function(arg00_)
          {
            return FakeService__FAKENotFound$();
          })));
        }
        else
        {
          var a = Option__GetValue$String_1String(projExist);
          var path = ((p + "/") + a);
          var file = ((fs.readFileSync(path)).toString());
          var regex = Regex__MatchesStatic$(file, "FAKE.exe.* ([\\w]+\\.fsx)");
          if ((MatchCollection__get_Count$(regex) > 0)) 
          {
            return Seq__Iterate$Int32_Int32((function(i)
            {
              if (Option__IsNone$Tuple_2_String__String_Tuple_2_String__String_(FakeService__File)) 
              {
                var build = ((p + "/") + Capture__get_Value$(GroupCollection__get_Item$(Match__get_Groups$(MatchCollection__get_Item$(regex, i)), 1)));
                if ((fs.existsSync(build))) 
                {
                  FakeService__File = {Tag: 1.000000, Value: (new TupleString_String(path, build))};
                  var _ignored0 = (((window.atom).commands).add("atom-workspace", "FAKE:Build", (function(arg00_)
                  {
                    return FakeService__BuildTask$();
                  })));
                  var __ignored0 = (((window.atom).commands).add("atom-workspace", "FAKE:Build-Default", (function(arg00_)
                  {
                    return FakeService__BuildDefault$();
                  })));
                  var ___ignored0 = (((window.atom).commands).add("atom-workspace", "FAKE:Show-Builds", (function(arg00_)
                  {
                    return FakeService__ShowBuildList$();
                  })));
                }
                else
                {
                  ;
                };
              }
              else
              {
                ;
              };
            }), Seq__OfList$Int32_Int32(Seq__ToList$Int32_Int32(Range__oneStep$Int32_Int32(0, (MatchCollection__get_Count$(regex) - 1)))));
          }
          else
          {
            var _ignored0 = (((window.atom).commands).add("atom-workspace", "FAKE: Build", (function(arg00_)
            {
              return FakeService__FAKENotFound$();
            })));
          };
        };
      });
    });
    if ((p != undefined)) 
    {
      return (fs.readdir(p, (function(delegateArg,_delegateArg)
      {
        return proj(delegateArg)(_delegateArg);
      })));
    }
    else
    {
      ;
    };
});
FakeService__get_BuildList$ = (function()
{
    return [];
});
FakeService__get_File$ = (function()
{
    return {Tag: 0.000000};
});
FakeService__get_buildListView$ = (function()
{
    return {Tag: 0.000000};
});
FakeService__get_taskListView$ = (function()
{
    return {Tag: 0.000000};
});
FakeService__registerBuildList$ = (function(unitVar0)
{
    var stopChangingCallback = (function(ev)
    {
      return (function(lv)
      {
        return (function(_unitVar0)
        {
          ;
        });
      });
    });
    var cancelledCallback = (function()
    {
      var _724;
      return (function(_arg1)
      {
        return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
        {
          var model = tupledArg.Items[0.000000];
          var view = tupledArg.Items[1.000000];
          return (view.hide());
        }), FakeService__buildListView);
      })(_724);
    });
    var confirmedCallback = (function(buildDescription)
    {
      Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
      {
        var model = tupledArg.Items[0.000000];
        var view = tupledArg.Items[1.000000];
        return (view.hide());
      }), FakeService__buildListView);
      var build = Seq__Find$BuildData_BuildData_((function(n)
      {
        var dateString = String__Replace$(String__Replace$(DateTime__ToShortDateString$(n.Start), "\\", "."), "/", ".");
        var timeString = String__Replace$(String__Replace$(DateTime__ToShortTimeString$(n.Start), "\\", "."), "/", ".");
        var clo1 = String__PrintFormatToString$("%s - %s %s");
        var desc = (function(arg10)
        {
          var clo2 = clo1(arg10);
          return (function(arg20)
          {
            var clo3 = clo2(arg20);
            return (function(arg30)
            {
              return clo3(arg30);
            });
          });
        })(n.Name)(dateString)(timeString);
        return (desc == buildDescription.data);
      }), ResizeArray__ToSeq$BuildData_BuildData_(FakeService__BuildList));
      ((((window.atom).workspace).open(buildDescription.data, (new OpenEditorOptions___ctor$("right")))).done((function(ed)
      {
        build.TextEditor = {Tag: 1.000000, Value: ed};
        null;
        var ignored0 = (ed.insertText(build.Output));
        var _ignored0 = (ed.onDidDestroy((function(_arg2)
        {
          build.TextEditor = {Tag: 0.000000};
        })));
        var view = (((window.atom).views).getView(ed));
        return view.component.setInputEnabled(false);
      })));
    });
    return ListView__regiterListView$FSharpFunc_2_ItemDescription__JQuery_FSharpFunc_2_ItemDescription__JQuery_(stopChangingCallback, cancelledCallback, confirmedCallback, (function(desc)
    {
      return FakeService__viewForItem$(desc);
    }), false);
});
FakeService__registerTaskList$ = (function(unitVar0)
{
    var stopChangingCallback = (function(ev)
    {
      return (function(lv)
      {
        return (function(_unitVar0)
        {
          ;
        });
      });
    });
    var cancelledCallback = (function()
    {
      var _30;
      return (function(_arg1)
      {
        return Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
        {
          var model = tupledArg.Items[0.000000];
          var view = tupledArg.Items[1.000000];
          return (view.hide());
        }), FakeService__taskListView);
      })(_30);
    });
    var confirmedCallback = (function(packageDescription)
    {
      Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_((function(tupledArg)
      {
        var model = tupledArg.Items[0.000000];
        var view = tupledArg.Items[1.000000];
        return (view.hide());
      }), FakeService__taskListView);
      return FakeService__startBuild$(packageDescription);
    });
    return ListView__regiterListView$FSharpFunc_2_ItemDescription__JQuery_FSharpFunc_2_ItemDescription__JQuery_(stopChangingCallback, cancelledCallback, confirmedCallback, (function(desc)
    {
      return FakeService__viewForItem$(desc);
    }), false);
});
FakeService__startBuild$ = (function(packageDescription)
{
    Option__Iterate$Tuple_2_String__String_Tuple_2_String__String_((function(tupledArg)
    {
      var build = tupledArg.Items[0.000000];
      var fake = tupledArg.Items[1.000000];
      var data = (new BuildData___ctor$(packageDescription.data, DateTime__get_Now$(), {Tag: 0.000000}, "", {Tag: 0.000000}));
      FakeService__BuildList.push(data);
      var fakeProcess = Process__spawnWithNotifications$(build, "sh", packageDescription.data);
      var ignored0 = (fakeProcess.on("exit", (function(_arg1)
      {
        data.End = {Tag: 1.000000, Value: DateTime__get_Now$()};
      })));
      var _ignored0 = ((fakeProcess.stdout).on("data", (function(e)
      {
        data.Output = (data.Output + e.toString());
        null;
        return Option__Iterate$IEditor_IEditor_((function(te)
        {
          var b = (te.getBuffer());
          var __ignored0 = (b.append(e.toString()));
        }), data.TextEditor);
      })));
      var __ignored0 = ((fakeProcess.stderr).on("data", (function(e)
      {
        data.Output = (data.Output + e.toString());
        null;
        return Option__Iterate$IEditor_IEditor_((function(te)
        {
          var b = (te.getBuffer());
          var ___ignored0 = (b.append(e.toString()));
        }), data.TextEditor);
      })));
    }), FakeService__File);
});
FakeService__viewForItem$ = (function(desc)
{
    if ((desc != undefined)) 
    {
      var clo1 = String__PrintFormatToString$("\u003cli\u003e%s\u003c/li\u003e");
      return ViewsHelpers__jq$((function(arg10)
      {
        return clo1(arg10);
      })(desc.data));
    }
    else
    {
      return ViewsHelpers__jq$("\u003cli\u003e\u003c/li\u003e");
    };
});
Fake___ctor$ = (function(unitVar0)
{
    {};
});
Fake__activate$ = (function(x,state)
{
    FakeService__activate$();
});
Fake__deactivate$ = (function(x,unitVar1)
{
    ;
});
GroupCollection__get_Item$ = (function(xs,i)
{
    return xs[i];
});
ItemDescription___ctor$ = (function(data)
{
    var __this = this;
    __this.data = data;
});
ListView__regiterListView$FSharpFunc_2_ItemDescription__JQuery_FSharpFunc_2_ItemDescription__JQuery_ = (function(stopChangingCallback,cancelledCallback,confirmedCallback,viewFunction,removeFiler)
{
    var listView = new atomSpaceView.SelectListView();
    var editorView = (((listView[0]).firstChild).getModel());
    ((editorView.getBuffer()).stoppedChangingDelay) = 200.000000;
    null;
    var ignored0 = ((editorView.getBuffer()).onDidStopChanging(stopChangingCallback(editorView)(listView)));
    var item = listView;
    var priority = 100;
    var panel = (((window.atom).workspace).addModalPanel((new PanelOptions___ctor$(item, false, priority))));
    (listView.getFilterKey = (function()
    {
      var _693;
      return (function(_arg1)
      {
        return "name";
      })(_693);
    }));
    if (removeFiler) 
    {
      (listView.getFilterQuery = (function()
      {
        var _698;
        return (function(_arg2)
        {
          return "";
        })(_698);
      }));
    }
    else
    {
      ;
    };
    (listView.viewForItem = viewFunction);
    (listView.cancelled = cancelledCallback);
    (listView.confirmed = confirmedCallback);
    return (new TupleSelectListView__IPanel_(listView, panel));
});
List__CreateCons$Int32_Int32 = (function(x,xs)
{
    return (new list_1_Int32__ConsInt32(x, xs));
});
List__CreateCons$String___String___ = (function(x,xs)
{
    return (new list_1_String____ConsString___(x, xs));
});
List__Empty$Int32_Int32 = (function()
{
    return (new list_1_Int32__NilInt32());
});
List__Empty$String___String___ = (function()
{
    return (new list_1_String____NilString___());
});
List__Fold$Int32__list_1_Int32_Int32_list_1_Int32_ = (function(f,seed,xs)
{
    return List__FoldIndexed$Int32__list_1_Int32_Int32_list_1_Int32_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
List__FoldIndexed$Int32__list_1_Int32_Int32_list_1_Int32_ = (function(f,seed,xs)
{
    return List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32(f, 0, seed, xs);
});
List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32 = (function(f,i,acc,_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return List__FoldIndexedAux$list_1_Int32__Int32_list_1_Int32__Int32(f, (i + 1), f(i)(acc)(x), xs);
    }
    else
    {
      return acc;
    };
});
List__Head$Int32_Int32 = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return x;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__Head$String___String___ = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return x;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__Reverse$Int32_Int32 = (function(xs)
{
    return List__Fold$Int32__list_1_Int32_Int32_list_1_Int32_((function(acc)
    {
      return (function(x)
      {
        return (new list_1_Int32__ConsInt32(x, acc));
      });
    }), (new list_1_Int32__NilInt32()), xs);
});
List__Tail$Int32_Int32 = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return xs;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
List__Tail$String___String___ = (function(_arg1)
{
    if ((_arg1.Tag == 1.000000)) 
    {
      var xs = _arg1.Item2;
      var x = _arg1.Item1;
      return xs;
    }
    else
    {
      throw ("List was empty");
      return null;
    };
});
MatchCollection__get_Count$ = (function(xs,unitVar1)
{
    return Array__BoxedLength$(xs);
});
MatchCollection__get_Item$ = (function(xs,i)
{
    return xs[i];
});
Match__get_Groups$ = (function(x,unitVar1)
{
    return x;
});
NotificationsOptions___ctor$ = (function(detail,dismissable)
{
    var __this = this;
    __this.detail = detail;
    __this.dismissable = dismissable;
});
OpenEditorOptions___ctor$ = (function(split)
{
    var __this = this;
    __this.split = split;
});
Option__GetValue$BuildData_BuildData_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$FSharpList_1_Int32_FSharpList_1_Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$FSharpList_1_String___FSharpList_1_String___ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IEditor_IEditor_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$IEnumerator_1_BuildData_IEnumerator_1_BuildData_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$INotification_INotification_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Int32_Int32 = (function(option)
{
    return option.Value;;
});
Option__GetValue$String_1String = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_BuildData__Int32_Tuple_2_BuildData__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Match__Int32_Tuple_2_Match__Int32_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_Object__IEnumerator_1_BuildData_Tuple_2_Object__IEnumerator_1_BuildData_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String__String_Tuple_2_String__String_ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___ = (function(option)
{
    return option.Value;;
});
Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_ = (function(option)
{
    return option.Value;;
});
Option__IsNone$Tuple_2_String__String_Tuple_2_String__String_ = (function(option)
{
    return (!Option__IsSome$Tuple_2_String__String_Tuple_2_String__String_(option));
});
Option__IsSome$FSharpList_1_Int32_FSharpList_1_Int32_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$FSharpList_1_String___FSharpList_1_String___ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$IEnumerator_1_BuildData_IEnumerator_1_BuildData_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$Int32_Int32 = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__IsSome$Tuple_2_String__String_Tuple_2_String__String_ = (function(option)
{
    return ((option.Tag == 1.000000) && true);
});
Option__Iterate$IEditor_IEditor_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$IEditor_IEditor_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$INotification_INotification_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$INotification_INotification_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$Tuple_2_SelectListView__IPanel_Tuple_2_SelectListView__IPanel_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Option__Iterate$Tuple_2_String__String_Tuple_2_String__String_ = (function(f,inp)
{
    if ((inp.Tag == 1.000000)) 
    {
      var x = Option__GetValue$Tuple_2_String__String_Tuple_2_String__String_(inp);
      return f(x);
    }
    else
    {
      ;
    };
});
Options___ctor$ = (function(cwd)
{
    var __this = this;
    __this.cwd = cwd;
});
PanelOptions___ctor$ = (function(item,visible,priority)
{
    var __this = this;
    __this.item = item;
    __this.visible = visible;
    __this.priority = priority;
});
Process__handle$Object_Object_ = (function(currentNotification,error,input)
{
    var output = input.toString();
    ((window.console).log(output));
    if (error) 
    {
      Process__notice$(currentNotification, true, "FAKE error", output);
    }
    else
    {
      Process__notice$(currentNotification, false, "", output);
    };
});
Process__handleExit$INotification_INotification_ = (function(currentNotification,code)
{
    return Option__Iterate$INotification_INotification_((function(n)
    {
      var view = ViewsHelpers__jq_$((((window.atom).views).getView(n)));
      var ignored0 = (view.removeClass("info"));
      var _ignored0 = (view.removeClass("icon-info"));
      if (((code == "0") && (!(view.hasClass("error"))))) 
      {
        var __ignored0 = (view.addClass("success"));
        var ___ignored0 = (view.addClass("icon-check"));
      }
      else
      {
        var ____ignored0 = (view.addClass("error"));
        var _____ignored0 = (view.addClass("icon-flame"));
      };
    }), currentNotification.contents);
});
Process__isWin$ = (function(unitVar0)
{
    return String__StartsWith$(((window.process).platform), "win");
});
Process__notice$ = (function(currentNotification,isError,text,details)
{
    var matchValue = currentNotification.contents;
    if ((matchValue.Tag == 0.000000)) 
    {
      var _491;
      if (isError) 
      {
        _491 = (((window.atom).notifications).addError(text, (new NotificationsOptions___ctor$(details, true))));
      }
      else
      {
        _491 = (((window.atom).notifications).addInfo(text, (new NotificationsOptions___ctor$(details, true))));
      };
      var n = _491;
      currentNotification.contents = {Tag: 1.000000, Value: n};
    }
    else
    {
      var _n = Option__GetValue$INotification_INotification_(matchValue);
      var view = (((window.atom).views).getView(_n));
      var t = ViewsHelpers__jqC$(view, ".content .detail .detail-content");
      var line = (("\u003cdiv class=\u0027line\u0027\u003e" + details) + "\u003c/div\u003e");
      var ignored0 = (t.append(line));
    };
});
Process__spawnWithNotifications$ = (function(location,linuxCmd,cmd)
{
    var _69;
    if ((cmd == "")) 
    {
      _69 = [];
    }
    else
    {
      _69 = String__SplitWithoutOptions$(cmd, [" "]);
    };
    var cmd_ = _69;
    var options = (new Options___ctor$((((window.atom).project).getPaths())[0]));
    var _293;
    if (Process__isWin$()) 
    {
      _293 = (child_process.spawn(location, cmd_, options));
    }
    else
    {
      var prms = Array__Concat$String_1String(Seq__OfList$String___String___(List__CreateCons$String___String___([location], List__CreateCons$String___String___(cmd_, List__Empty$String___String___()))));
      _293 = (child_process.spawn(linuxCmd, prms, options));
    };
    var procs = _293;
    var currentNotification = {contents: {Tag: 0.000000}};
    var ignored0 = (procs.on("exit", (function(code)
    {
      return Process__handleExit$INotification_INotification_(currentNotification, code);
    })));
    var error = false;
    var _ignored0 = ((procs.stdout).on("data", (function(input)
    {
      return Process__handle$Object_Object_(currentNotification, error, input);
    })));
    var _error = true;
    var __ignored0 = ((procs.stderr).on("data", (function(input)
    {
      return Process__handle$Object_Object_(currentNotification, _error, input);
    })));
    return procs;
});
Range__customStep$Int32__Int32_Int32_Int32 = (function(first,stepping,last)
{
    var zero = 0;
    return Seq__Unfold$Int32__Int32_Int32_Int32((function(x)
    {
      if ((((stepping > zero) && (x <= last)) || ((stepping < zero) && (x >= last)))) 
      {
        return {Tag: 1.000000, Value: (new TupleInt32_Int32(x, (x + stepping)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), first);
});
Range__oneStep$Int32_Int32 = (function(first,last)
{
    return Range__customStep$Int32__Int32_Int32_Int32(first, 1, last);
});
Regex__Create$ = (function(pattern)
{
    return (new RegExp(pattern, 'g' + ""));
});
Regex__MatchCollectionToSeq$ = (function(xs)
{
    return Seq__Unfold$Int32__Match_1Int32_Match_1((function(i)
    {
      if ((i < MatchCollection__get_Count$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleMatch_1_Int32(MatchCollection__get_Item$(xs, i), (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Regex__Matches$ = (function(r,input)
{
    return Regex__MatchesWithOffset$(r, input, 0);
});
Regex__MatchesStatic$ = (function(input,pattern)
{
    var regex = Regex__Create$(pattern);
    return Regex__Matches$(regex, input);
});
Regex__MatchesWithOffset$ = (function(r,input,offset)
{
    if (!r.global) { throw "Non-global RegExp" }
    var m, matches = [];
    r.lastIndex = offset;
    while ((m = r.exec(input)) !== null) { matches.push(m) }
    return matches;
});
ResizeArray_1_Object__get_Count$Object_ = (function(xs,unitVar1)
{
    return xs.length;
});
ResizeArray_1_Object__get_Item$Object_ = (function(xs,index)
{
    return xs[index];
});
ResizeArray__ToSeq$BuildData_BuildData_ = (function(xs)
{
    return Seq__Unfold$Int32__BuildData_Int32_BuildData_((function(i)
    {
      if ((i < ResizeArray_1_Object__get_Count$Object_(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleBuildData__Int32(ResizeArray_1_Object__get_Item$Object_(xs, i), (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Seq__Cast$Match_1Match_1 = (function(xs)
{
    return xs;
});
Seq__Delay$Object_Object_ = (function(f)
{
    return Seq__FromFactory$Object_Object_((function(unitVar0)
    {
      var _1619;
      return Seq__Enumerator$Object_Object_(f(_1619));
    }));
});
Seq__Enumerator$BuildData_BuildData_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$Int32_Int32 = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$Match_1Match_1 = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$Object_Object_ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Enumerator$String___String___ = (function(xs)
{
    return xs.GetEnumerator();
});
Seq__Find$BuildData_BuildData_ = (function(f,xs)
{
    return Seq__FindIndexed$BuildData_BuildData_((function(_arg1)
    {
      return (function(x)
      {
        return f(x);
      });
    }), xs);
});
Seq__FindIndexed$BuildData_BuildData_ = (function(f,xs)
{
    var matchValue = Seq__TryFindIndexed$BuildData_BuildData_(f, xs);
    if ((matchValue.Tag == 1.000000)) 
    {
      var x = Option__GetValue$BuildData_BuildData_(matchValue);
      return x;
    }
    else
    {
      throw ("List did not contain any matching elements");
      return null;
    };
});
Seq__Fold$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_ = (function(f,seed,xs)
{
    return Seq__FoldIndexed$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Seq__Fold$Int32__Unit_Int32_Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexed$Int32__Unit_Int32_Unit_((function(_arg1)
    {
      return (function(acc)
      {
        return (function(x)
        {
          return f(acc)(x);
        });
      });
    }), seed, xs);
});
Seq__FoldIndexed$BuildData__Unit_BuildData__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__BuildData_Unit__BuildData_(f, seed, Seq__Enumerator$BuildData_BuildData_(xs));
});
Seq__FoldIndexed$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32(f, seed, Seq__Enumerator$Int32_Int32(xs));
});
Seq__FoldIndexed$Int32__Unit_Int32_Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Int32_Unit__Int32(f, seed, Seq__Enumerator$Int32_Int32(xs));
});
Seq__FoldIndexed$Match_1_Unit_Match_1_Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Match_1Unit__Match_1(f, seed, Seq__Enumerator$Match_1Match_1(xs));
});
Seq__FoldIndexed$Object__Unit_Object__Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__Object_Unit__Object_(f, seed, Seq__Enumerator$Object_Object_(xs));
});
Seq__FoldIndexed$String____Unit_String____Unit_ = (function(f,seed,xs)
{
    return Seq__FoldIndexedAux$Unit__String___Unit__String___(f, seed, Seq__Enumerator$String___String___(xs));
});
Seq__FoldIndexedAux$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32 = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FoldIndexedAux$Unit__BuildData_Unit__BuildData_ = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FoldIndexedAux$Unit__Int32_Unit__Int32 = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FoldIndexedAux$Unit__Match_1Unit__Match_1 = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FoldIndexedAux$Unit__Object_Unit__Object_ = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FoldIndexedAux$Unit__String___Unit__String___ = (function(f,acc,xs)
{
    var i = {contents: 0};
    var _acc = {contents: acc};
    while (xs.MoveNext())
    {
      _acc.contents = f(i.contents)(_acc.contents)(xs.get_Current());
      null;
      i.contents = (i.contents + 1);
      null;
    };
    return _acc.contents;
});
Seq__FromFactory$BuildData_BuildData_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_BuildData___ctor$BuildData_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _886;
        return __.factory(_886);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$Int32_Int32 = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Int32___ctor$Int32(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _1800;
        return __.factory(_1800);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$Match_1Match_1 = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Match___ctor$Match_1(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _1229;
        return __.factory(_1229);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$Object_Object_ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_Object___ctor$Object_(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _1611;
        return __.factory(_1611);
      })(impl, unitVar1);
    })};
});
Seq__FromFactory$String___String___ = (function(f)
{
    var impl;
    impl = (new CreateEnumerable_1_String_____ctor$String___(f));
    return {GetEnumerator: (function(unitVar1)
    {
      return (function(__,unitVar1)
      {
        var _183;
        return __.factory(_183);
      })(impl, unitVar1);
    })};
});
Seq__Iterate$Int32_Int32 = (function(f,xs)
{
    var _2000;
    return Seq__Fold$Int32__Unit_Int32_Unit_((function(unitVar0)
    {
      return (function(x)
      {
        return f(x);
      });
    }), _2000, xs);
});
Seq__IterateIndexed$BuildData_BuildData_ = (function(f,xs)
{
    var _1453;
    return Seq__FoldIndexed$BuildData__Unit_BuildData__Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _1453, xs);
});
Seq__IterateIndexed$Match_1Match_1 = (function(f,xs)
{
    var _1248;
    return Seq__FoldIndexed$Match_1_Unit_Match_1_Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _1248, xs);
});
Seq__IterateIndexed$Object_Object_ = (function(f,xs)
{
    var _1633;
    return Seq__FoldIndexed$Object__Unit_Object__Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _1633, xs);
});
Seq__IterateIndexed$String___String___ = (function(f,xs)
{
    var _203;
    return Seq__FoldIndexed$String____Unit_String____Unit_((function(i)
    {
      return (function(unitVar1)
      {
        return (function(x)
        {
          return f(i)(x);
        });
      });
    }), _203, xs);
});
Seq__Map$BuildData__Object_BuildData__Object_ = (function(f,xs)
{
    return Seq__Delay$Object_Object_((function(unitVar0)
    {
      return Seq__Unfold$IEnumerator_1_BuildData__Object_IEnumerator_1_BuildData__Object_((function(_enum)
      {
        if (_enum.MoveNext()) 
        {
          return {Tag: 1.000000, Value: (new TupleObject__IEnumerator_1_BuildData_(f(_enum.get_Current()), _enum))};
        }
        else
        {
          return {Tag: 0.000000};
        };
      }), Seq__Enumerator$BuildData_BuildData_(xs));
    }));
});
Seq__OfArray$BuildData_BuildData_ = (function(xs)
{
    return Seq__Unfold$Int32__BuildData_Int32_BuildData_((function(i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleBuildData__Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Seq__OfArray$String___String___ = (function(xs)
{
    return Seq__Unfold$Int32__String___Int32_String___((function(i)
    {
      if ((i < Array__BoxedLength$(xs))) 
      {
        return {Tag: 1.000000, Value: (new TupleString____Int32(xs[i], (i + 1)))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), 0);
});
Seq__OfList$Int32_Int32 = (function(xs)
{
    return Seq__Unfold$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32((function(_arg1)
    {
      if ((_arg1.Tag == 1.000000)) 
      {
        var _xs = List__Tail$Int32_Int32(_arg1);
        var x = List__Head$Int32_Int32(_arg1);
        return {Tag: 1.000000, Value: (new TupleInt32_FSharpList_1_Int32_(x, _xs))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), xs);
});
Seq__OfList$String___String___ = (function(xs)
{
    return Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___((function(_arg1)
    {
      if ((_arg1.Tag == 1.000000)) 
      {
        var _xs = List__Tail$String___String___(_arg1);
        var x = List__Head$String___String___(_arg1);
        return {Tag: 1.000000, Value: (new TupleString____FSharpList_1_String___(x, _xs))};
      }
      else
      {
        return {Tag: 0.000000};
      };
    }), xs);
});
Seq__SortBy$BuildData__DateTime_1BuildData__DateTime_1 = (function(f,xs)
{
    var ys = Seq__ToArray$BuildData_BuildData_(xs);
    Array__SortInPlaceBy$BuildData__DateTime_1BuildData__DateTime_1(f, ys);
    return Seq__OfArray$BuildData_BuildData_(ys);
});
Seq__ToArray$BuildData_BuildData_ = (function(xs)
{
    var ys = Array__ZeroCreate$BuildData_BuildData_(0);
    Seq__IterateIndexed$BuildData_BuildData_((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
Seq__ToArray$Match_1Match_1 = (function(xs)
{
    var ys = Array__ZeroCreate$Match_1Match_1(0);
    Seq__IterateIndexed$Match_1Match_1((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
Seq__ToArray$Object_Object_ = (function(xs)
{
    var ys = Array__ZeroCreate$Object_Object_(0);
    Seq__IterateIndexed$Object_Object_((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
Seq__ToArray$String___String___ = (function(xs)
{
    var ys = Array__ZeroCreate$String___String___(0);
    Seq__IterateIndexed$String___String___((function(i)
    {
      return (function(x)
      {
        ys[i] = x;
        return null;
      });
    }), xs);
    return ys;
});
Seq__ToList$Int32_Int32 = (function(xs)
{
    return List__Reverse$Int32_Int32(Seq__Fold$Int32__FSharpList_1_Int32_Int32_FSharpList_1_Int32_((function(acc)
    {
      return (function(x)
      {
        return List__CreateCons$Int32_Int32(x, acc);
      });
    }), List__Empty$Int32_Int32(), xs));
});
Seq__TryFindIndexed$BuildData_BuildData_ = (function(f,xs)
{
    return Seq__TryPickIndexed$BuildData__BuildData_BuildData__BuildData_((function(i)
    {
      return (function(x)
      {
        if (f(i)(x)) 
        {
          return {Tag: 1.000000, Value: x};
        }
        else
        {
          return {Tag: 0.000000};
        };
      });
    }), xs);
});
Seq__TryPickIndexed$BuildData__BuildData_BuildData__BuildData_ = (function(f,xs)
{
    return Seq__TryPickIndexedAux$BuildData__BuildData_BuildData__BuildData_(f, 0, Seq__Enumerator$BuildData_BuildData_(xs));
});
Seq__TryPickIndexedAux$BuildData__BuildData_BuildData__BuildData_ = (function(f,i,xs)
{
    if (xs.MoveNext()) 
    {
      var result = f(i)(xs.get_Current());
      if ((result.Tag == 0.000000)) 
      {
        return Seq__TryPickIndexedAux$BuildData__BuildData_BuildData__BuildData_(f, (i + 1), xs);
      }
      else
      {
        return result;
      };
    }
    else
    {
      return {Tag: 0.000000};
    };
});
Seq__Unfold$FSharpList_1_Int32__Int32_FSharpList_1_Int32__Int32 = (function(f,seed)
{
    return Seq__FromFactory$Int32_Int32((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_FSharpList_1_Int32__Int32___ctor$FSharpList_1_Int32__Int32(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$FSharpList_1_Int32_FSharpList_1_Int32_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Int32__FSharpList_1_Int32_Tuple_2_Int32__FSharpList_1_Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$FSharpList_1_Int32_FSharpList_1_Int32_(__.acc) && (function()
          {
            var _1977;
            return next(_1977);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$FSharpList_1_String____String___FSharpList_1_String____String___ = (function(f,seed)
{
    return Seq__FromFactory$String___String___((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$FSharpList_1_String___FSharpList_1_String___(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String____FSharpList_1_String___Tuple_2_String____FSharpList_1_String___(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$FSharpList_1_String___FSharpList_1_String___(__.acc) && (function()
          {
            var _390;
            return next(_390);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$IEnumerator_1_BuildData__Object_IEnumerator_1_BuildData__Object_ = (function(f,seed)
{
    return Seq__FromFactory$Object_Object_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_IEnumerator_1_BuildData__Object___ctor$IEnumerator_1_BuildData__Object_(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$IEnumerator_1_BuildData_IEnumerator_1_BuildData_(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Object__IEnumerator_1_BuildData_Tuple_2_Object__IEnumerator_1_BuildData_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Object__IEnumerator_1_BuildData_Tuple_2_Object__IEnumerator_1_BuildData_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$IEnumerator_1_BuildData_IEnumerator_1_BuildData_(__.acc) && (function()
          {
            var _1589;
            return next(_1589);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$Int32__BuildData_Int32_BuildData_ = (function(f,seed)
{
    return Seq__FromFactory$BuildData_BuildData_((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__BuildData___ctor$Int32_BuildData_(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_BuildData__Int32_Tuple_2_BuildData__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_BuildData__Int32_Tuple_2_BuildData__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _864;
            return next(_864);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$Int32__Int32_Int32_Int32 = (function(f,seed)
{
    return Seq__FromFactory$Int32_Int32((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Int32__Int32_Tuple_2_Int32__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _1778;
            return next(_1778);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$Int32__Match_1Int32_Match_1 = (function(f,seed)
{
    return Seq__FromFactory$Match_1Match_1((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__Match___ctor$Int32_Match_1(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_Match__Int32_Tuple_2_Match__Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_Match__Int32_Tuple_2_Match__Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _1207;
            return next(_1207);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
Seq__Unfold$Int32__String___Int32_String___ = (function(f,seed)
{
    return Seq__FromFactory$String___String___((function(unitVar0)
    {
      var impl;
      impl = (new UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___(seed, f));
      return {get_Current: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          return __.current;
        })(impl, unitVar1);
      }), Dispose: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          ;
        })(impl, unitVar1);
      }), MoveNext: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          var next = (function(_unitVar0)
          {
            var currAcc = Option__GetValue$Int32_Int32(__.acc);
            var x = __.unfold(currAcc);
            if ((x.Tag == 1.000000)) 
            {
              var value = Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_(x).Items[0.000000];
              var nextAcc = Option__GetValue$Tuple_2_String____Int32_Tuple_2_String____Int32_(x).Items[1.000000];
              __.acc = {Tag: 1.000000, Value: nextAcc};
              __.current = value;
              return true;
            }
            else
            {
              __.acc = {Tag: 0.000000};
              __.current = null;
              return false;
            };
          });
          return (Option__IsSome$Int32_Int32(__.acc) && (function()
          {
            var _161;
            return next(_161);
          })());
        })(impl, unitVar1);
      }), Reset: (function(unitVar1)
      {
        return (function(__,unitVar1)
        {
          __.acc = {Tag: 1.000000, Value: __.seed};
          __.current = null;
        })(impl, unitVar1);
      })};
    }));
});
String__PrintFormatToString$ = (function(s)
{
    var reg = /%[+\-* ]?\d*(?:\.(\d+))?(\w)/;
    function formatToString(rep) {
        s = s.replace(reg, function(match, precision, format) {
            switch (format) {
                case "f": case "F": return precision ? rep.toFixed(precision) : rep.toFixed(6);
                case "g": case "G": return rep.toPrecision(precision);
                case "e": case "E": return rep.toExponential(precision);
                case "A": return JSON.stringify(rep);
                default:  return rep;
            }
        });
        return reg.test(s) ? formatToString : s;
    }
    return formatToString;
});
String__Replace$ = (function(s,search,replace)
{
    var splits = s.split(search);
    return splits.join(replace);
});
String__SplitWithoutOptions$ = (function(s,delimiters)
{
    var folder = (function(inputs)
    {
      return (function(delimiter)
      {
        return Array__Concat$String_1String(Seq__OfArray$String___String___(Array__Map$String_1_String___String_String___((function(inp)
        {
          return inp.split(delimiter);
        }), inputs)));
      });
    });
    var state = [s];
    return (function(array)
    {
      return Array__Fold$String_1_String___String_String___(folder, state, array);
    })(delimiters);
});
String__StartsWith$ = (function(s,search)
{
    return (s.indexOf(search) == 0);
});
TupleBuildData__Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleInt32_FSharpList_1_Int32_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleInt32_Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleMatch_1_Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleObject__IEnumerator_1_BuildData_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleSelectListView__IPanel_ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString_String = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString____FSharpList_1_String___ = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
TupleString____Int32 = (function(Item0,Item1)
{
    var __this = this;
    __this.Items = [Item0, Item1];
});
UnfoldEnumerator_2_FSharpList_1_Int32__Int32___ctor$FSharpList_1_Int32__Int32 = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_FSharpList_1_String____String_____ctor$FSharpList_1_String____String___ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_IEnumerator_1_BuildData__Object___ctor$IEnumerator_1_BuildData__Object_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__BuildData___ctor$Int32_BuildData_ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__Int32___ctor$Int32_Int32 = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__Match___ctor$Int32_Match_1 = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
UnfoldEnumerator_2_Int32__String_____ctor$Int32_String___ = (function(seed,unfold)
{
    var __this = this;
    {};
    __this.seed = seed;
    __this.unfold = unfold;
    __this.acc = {Tag: 1.000000, Value: __this.seed};
    __this.current = null;
});
ViewsHelpers__jq$ = (function(selector)
{
    return ((window.$)(selector));
});
ViewsHelpers__jqC$ = (function(context,selector)
{
    return ((window.$)(selector, context));
});
ViewsHelpers__jq_$ = (function(selector)
{
    return ((window.$)(selector));
});
list_1_Int32__ConsInt32 = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_Int32__NilInt32 = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
list_1_String____ConsString___ = (function(Item1,Item2)
{
    var __this = this;
    __this.Tag = 1.000000;
    __this._CaseName = "Cons";
    __this.Item1 = Item1;
    __this.Item2 = Item2;
});
list_1_String____NilString___ = (function()
{
    var __this = this;
    __this.Tag = 0.000000;
    __this._CaseName = "Nil";
});
FakeService__taskListView = FakeService__get_taskListView$();
FakeService__BuildList = FakeService__get_BuildList$();
FakeService__File = FakeService__get_File$();
FakeService__buildListView = FakeService__get_buildListView$();
return [(function(ign)
{
    return (new Fake___ctor$());
}), (function(_this)
{
    return Fake__deactivate$(_this);
}), (function(_this)
{
    return (function(p0)
    {
      return Fake__activate$(_this, p0);
    });
})]
 }
var _funcs = wrappedFunScript();
var _self = _funcs[0]();

module.exports = IonidePaket = {
deactivate: function() {
  return _funcs[1](_self); },
activate: function(p1) {
  return _funcs[2](_self)(p1); }
};