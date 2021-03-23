# Hydro Counter app

This repository is an example use of Hydro-SDK.

You'll need the `npm`, `npx` and `flutter` commands available.

Hydro-SDK itself is managed both through `npm` and `flutter pub`.

Hydro-SDK publishes to `npm` under both `@latest` and `@nightly` tags here https://www.npmjs.com/package/@hydro-sdk/hydro-sdk

Depend on the latest (currently, nightly) build by adding Hydro-SDK to your `package.json` and `pubspec.yaml`
```json
"dependencies": {
    "@hydro-sdk/hydro-sdk": "0.0.1-nightly.169"
  }
  ```
  ```yaml
hydro_sdk: 
    git: 
      ref: "0.0.1-nightly.169"
      url: "git://github.com/hydro-sdk/hydro-sdk.git"
  ```

Its important that Hydro-SDK is included as a `dependency` and NOT a `devDependency` in both `package.json` and `pubspec.yaml`.

Once Hydro-SDK is mature enough, it will be available as a separate `pub` package.

The example project `hydro.json` can be built to `assets/ota` in debug mode by running:
```bash
npx hydroc build --out-dir assets/ota --profile debug
```

If this is the first time using a specific version of Hydro-SDK in a directory, `hydroc` will first download SDK-tools needed for your platform. The project described by `hydro.json` will then be built.  
![Output](https://github.com/hydro-sdk/hydro_demo/blob/master/media/console-output.png)

The `.ota` file output to `assets/ota` can be tested using the given widget test in `test` by running `flutter test`.

## Running
The example project `hydro.json` can be ran by running 
```
npx hydroc run
```
while also debugging `lib/main.dart` with the usual Flutter tools.

## Debugging
The following function
```typescript
import {pauseInDebugger} from "@hydro-sdk/hydro-sdk/runtime/dart/developer/debugger";
```
can be called to cause IDE dev tools to pause execution if the host application is running in debug mode and connected to a debugger. `pauseInDebugger` can optionally take a single argument, the value of which will be inspectable in the connected debugger. This can be useful to inspect class layouts at runtime or to step between sequential `pauseInDebugger` calls.