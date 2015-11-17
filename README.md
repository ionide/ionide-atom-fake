# Ionide-FAKE

Ionide-FAKE is part of the [Ionide](http://ionide.io) plugin suite, used for running FAKE build scripts without leaving the Atom editor.

[![Join the chat at https://gitter.im/ionide/ionide-project](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg?style=flat-square)](https://gitter.im/ionide/ionide-project?utm_source=share-link&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) --  [Need Help? You can find us on Gitter](https://gitter.im/ionide/ionide-project)   


## Features

- Run any build target defined in your project's FAKE build script
- Panel in which you can display output of any FAKE build run in the current Atom session (including currently running builds)

## Configuration

Since version `1.1.0`, `ionide-fake` allows to override the default conventions used to find and run FAKE builds. To do so, an `.ionide` file needs to be created in the root folder of the project in the current Atom session. The configuration file uses the [TOML](https://github.com/toml-lang/toml) language.

The default configuration values used if the `.ionide` file doesn't exist or some entry is missing are the following:

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
