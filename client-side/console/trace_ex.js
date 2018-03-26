function foo() {
  function bar() {
    console.trace();
  }

  bar();
}

function invoker(func) {
  func();
}

invoker(foo);