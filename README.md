# Hydro Example Project

This folder is an example usage of Hydro-SDK.

You'll need both the `npm`, and `flutter` commands available to scaffold the project and manage dependencies.

`flutter create .` establishes the basic Flutter project structure.

`npm init` will create and manage `package.json` and `package-lock.json`

Hydro-SDK itself is managed both through `npm` and `flutter pub`.

Hydro-SDK publishes to `npm` under both `@latest` and `@nightly` tags here https://www.npmjs.com/package/@hydro-sdk/hydro-sdk

Depend on the latest (currently, nightly) build by adding Hydro-SDK to your `package.json` and `pubspec.yaml`
```json
"dependencies": {
    "@hydro-sdk/hydro-sdk": "0.0.1-nightly.21"
  }
  ```
  ```yaml
hydro_sdk: 
    git: 
      ref: "0.0.1-nightly.21"
      url: "git://github.com/hydro-sdk/hydro-sdk.git"
  ```

Its important that Hydro-SDK is included as a `dependency` and NOT a `devDependency` in both `package.json` and `pubspec.yaml`.

Once Hydro-SDK is mature enough, it will be available as a separate `pub` package.

The provided `ota/hello-world.ts` file can be compiled into a bytecode image to `assets/hello-world.hc` by running
```
 node node_modules/@hydro-sdk/hydro-sdk/dist/compiler -t ota/hello-world.ts -m hello-world -d assets -p debug

```

`-t` is the target file to compile  
`-m` is the output file name, minus the extension  
`-d` is the output directory name  
`-p` is the build profile. Either `debug` or `release`  
`-w` (Optional) watch a directory and rebuild the given target with the given options when changes are detected

Development time hot-reload is only possible when running bytecode over the network with `RunFromNetwork`. This can be accomplished with the `-w` switch.

## Debugging
The following function
```typescript
import {pauseInDebugger} from "@hydro-sdk/hydro-sdk/runtime/dart/developer/debugger";
```
can be called to cause IDE dev tools to pause execution if the host application is running in debug mode and connected to a debugger. `pauseInDebugger` can optionally take a single argument, the value of which will be inspectable in the connected debugger. This can useful to inspect class layouts at runtime or to step between sequential `pauseInDebugger` calls.