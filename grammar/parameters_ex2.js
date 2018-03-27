function square(...nums) {
  return nums.map( num => num*num );
}

var squareNumsArray =  square(2, 3, 4, 5);
console.log(squareNumsArray);