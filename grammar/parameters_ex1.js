// before ES 6 
function divide(numerator, denominator) {
  var isDenominator = typeof denominator !== 'undefined'  
  denominator = isDenominator ? denominator : 1;

  return numerator / denominator;
}

divide(10);
divide(10, 2);

// ES 6

function divideV2(numerator, denominator=1) {
  return numerator / denominator;
}

divideV2(4);
divideV2(4, 3);