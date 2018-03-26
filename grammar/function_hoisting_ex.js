foo();

function foo() {
  console.log('It will hoist to the top!');
}

bar(); // bar is not a function

var bar = function() {
  console.log('variable hoisted.');
}