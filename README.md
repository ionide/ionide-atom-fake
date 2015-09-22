# Ionide-FAKE

Ionide-FAKE is part of the [Ionide](http://ionide.io) plugin suite, used for running FAKE build scripts without leaving an editor.

## Features

- Run any build target defined in yoru project's FAKE build script
- Panel in which you can display output of any FAKE build run in current Atom session ( including currently running builds)

## Configuration

Since version `1.1.0`, `ionide-fake` allows the user to override the default conventions used to find and run FAKE builds. To do so You need to create an `.ionide` file in the root folder of Your project opened by Atom. The configuration file uses the [TOML](https://github.com/toml-lang/toml) language.

Here is the default configuration values used if the `.ionide` file doesn't exist or some entry is missing:

```TOML
[Fake]
linuxPrefix = "mono"
command = "build.cmd"
build = "build.fsx"
```

* Linux Prefix - command used as prefix on Linux / Mac - usually `sh` or `mono`

* Command - command executed as build taking build name as parameter - usually `build.cmd`, `build.sh`, `build.ps1`

* Build - FAKE build script, which is parsed to obtain list of possible builds - usually `build.fsx`, `fake.fsx`

## Build Instructions

* Clone this repository
* Checkout `develop` branch
* Run `build.cmd` (for Windows) or `build.sh` (for Linux / Max) to build projects
* Go to `release` folder and run `apm link` to create symbolic link between plugin and Atom's plugins folder
* Run Atom

## Contributing and Copyright

The project is hosted at [GitHub](https://github.com/ionide/ionide-fake) where you can [report issues](https://github.com/ionide/ionide-fake/issues), fork
the project, and submit pull requests to `develop` branch.

The library is released under the [MIT license](https://github.com/ionide/ionide-fake/blob/master/LICENSE.md),
which allows modification and redistribution for both commercial and non-commercial purposes.

## Code of Conduct

This project adheres to No Code of Conduct. We are all adults. We accept everyone's contributions. Nothing else matters.

For more information please visit the [No Code of Conduct](https://github.com/domgetter/NCoC) homepage.
