function concat(separator) {
  var retStr = '';

  for (i=1; i < arguments.length; i++) {
    if (i == arguments.length-1) {
      retStr += arguments[i];
      break;
    }

    retStr += arguments[i] + separator;
  }
  
  return retStr;
}

console.log(concat(' | ', 'apple', 'banana', 'chicken'));