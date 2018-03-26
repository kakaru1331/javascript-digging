function inNOutgroup(count) {
  for (var i=1; i <= count; i++) {
    console.log('level: ' + (i));
    console.group();
  }

  for (true; i > 0; i--) {
    console.log('level: ' + (i));
    console.groupEnd();
  }
}

inNOutgroup(3);