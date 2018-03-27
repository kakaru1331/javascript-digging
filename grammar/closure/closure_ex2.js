var str = 'Chocolate';

var setFreeStr = function(str) {
  console.log('Ouuter: ' + str);

  return {
    setStr: function(str) {                 
      console.log('Inner: ' + str); // can't reachable to outter param  
    }
  }
}

var closure = setFreeStr('Salad');

closure.setStr('Chicken');

console.log(str); // global variable: chocolate