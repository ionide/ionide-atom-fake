# Ionide-FAKE

It's part of [Ionide](http://ionide.io) plugin suite.
Running FAKE build scripts not leaving an editor.

## Features

- Running any build target defined FAKE build script
- Panel in which you can display output of any FAKE build run in current Atom session ( including currently running builds)

## Configuration

Since version `1.1.0` `ionide-fake` allows user to override default conventions used to find and run FAKE builds. To do so You need to create `.ionide` file in the root folder of Your project opened by Atom. Configuration is using [TOML](https://github.com/toml-lang/toml) language.

Here is default (those values are used if `.ionide` files doesn't exist or some entry is missing) configuration file

```TOML
[Fake]
linuxPrefix = "mono"
command = "build.cmd"
build = "build.fsx"
```

* Linux Prefix - command used as prefix on Linux / Mac - usually `sh` or `mono`

* Command - command executed as build taking build name as parameter - usually `build.cmd`, `build.sh`, `build.ps1`

* Build - FAKE build script, which is parsed to obtain list of possible builds - usually `build.fsx`, `fake.fsx` 

## Build

* Clone this repository
* Checkout `develop` branch
* Run `build.cmd` (for Windows) or `build.sh` (for Linux / Max) to build projects
* Go to `release` folder and run `apm link` to create symbolic link between plugin and Atom's plugins folder
* Run Atom

## Contributing and copyright

The project is hosted on [GitHub](https://github.com/ionide/ionide-fake) where you can [report issues](https://github.com/ionide/ionide-fake/issues), fork
the project and submit pull requests to `develop` branch.

The library is available under [MIT license](https://github.com/ionide/ionide-fake/blob/master/LICENSE.md), which allows modification and
redistribution for both commercial and non-commercial purposes.

## Code of Conduct

This project adheres to No Code of Conduct. We are all adults. We accept everyone's contributions. Nothing else matters.

For more information please visit the [No Code of Conduct](https://github.com/domgetter/NCoC) homepage.
