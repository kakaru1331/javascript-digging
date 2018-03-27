var getClosureStr = function(str) {
  function inner() {
    return str;
  }

  return inner;
}

var coldPlay = getClosureStr('Coldplay');