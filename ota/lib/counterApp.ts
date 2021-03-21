//Make sure to import from /index specifically if using barell imports.
//The compiler won't resolve /index by itself
import {
    StatelessWidget,
    Text,
    Center,
    StatefulWidget,
    State,
    Column,
    MainAxisAlignment,
    Icon
} from "@hydro-sdk/hydro-sdk/runtime/flutter/widgets/index";
import { AppBar, FloatingActionButton, Icons, MaterialApp, Scaffold, Theme } from "@hydro-sdk/hydro-sdk/runtime/flutter/material/index";
import { Widget } from "@hydro-sdk/hydro-sdk/runtime/flutter/widget";
import { BuildContext } from "@hydro-sdk/hydro-sdk/runtime/flutter/buildContext";
import { Key } from "@hydro-sdk/hydro-sdk/runtime/flutter/foundation/key";

export class CounterApp extends StatelessWidget {
    public constructor() {
        super();
    }

    public build(): Widget {
        return new MaterialApp({
            title: "Counter App",
            initialRoute: "/",
            home: new MyHomePage("Counter App Home Page"),
        });
    }
}

class MyHomePage extends StatefulWidget {
    public title: string;
    public constructor(title: string) {
        super();
        this.title = title;
    }
    public createState(): MyHomePageState {
        return new MyHomePageState(this.title);
    }
}

class MyHomePageState extends State<MyHomePage> {
    private counter = 0;
    public title: string;
    public constructor(title: string) {
        super();
        this.title = title;
    }

    private incrementCounter = (): void => {
        this.setState(() => {
            this.counter++;
        });
    };

    public dispose() {}

    public initState() {}

    public build(context: BuildContext): Widget {
        return new Scaffold({
            appBar: new AppBar({
                title: new Text(this.title),
            }),
            body: new Center({
                child: new Column({
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                        new Text("You have pushed the button this many times"),
                        new Text(this.counter.toString(), {
                            key: new Key("counter"),
                            style: Theme.of(context).textTheme.display1,
                        }),
                    ],
                }),
            }),
            floatingActionButton: new FloatingActionButton({
                key: new Key("increment"),
                child: new Icon(Icons.add),
                onPressed: this.incrementCounter,
            }),
        });
    }
}