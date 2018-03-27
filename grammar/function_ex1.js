function ThreeTimesThenAdd(x) {
  
  function inner (y) {
    return x*x*x + y;
  }

  return inner;
}

retFunc = ThreeTimesThenAdd(3);
retFunc(3); // 27 + 3

ThreeTimesThenAdd(2)(2); // 2^3 + 2