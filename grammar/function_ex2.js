function threePow(x) {

  function square(y) {

    function pow3(z) {      
      console.log(x, y, z);
    }
    
    temp = y*x;
    pow3(temp);

  }

  var temp = x*x;
  square(temp);
}

threePow(2);
threePow(3);