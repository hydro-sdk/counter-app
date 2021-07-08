import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:hydro_sdk/runComponent/runComponent.dart';

void main() {
  LiveTestWidgetsFlutterBinding();
  testWidgets('counter smoke test', (WidgetTester tester) async {
    await tester.pumpWidget(const RunComponentFromFile(
      component: "counter-app",
      path: "assets/ota/counter-app.ota",
    ));

    await tester.pumpAndSettle();

    var exception = tester.takeException();
    expect(exception, isNull);

    expect(find.byKey(const Key("counter")), findsOneWidget);
    expect(find.byKey(const Key("increment")), findsOneWidget);
    expect(find.text("You have pushed the button this many times"),
        findsOneWidget);

    expect(find.text("0"), findsOneWidget);
    await tester.tap(find.byKey(const Key("increment")));
    await tester.pumpAndSettle();
    expect(find.text("1"), findsOneWidget);
    await tester.tap(find.byKey(const Key("increment")));
    await tester.pumpAndSettle();
    expect(find.text("2"), findsOneWidget);
  });
}
