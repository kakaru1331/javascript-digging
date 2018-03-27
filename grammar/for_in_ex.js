function printProps(obj) {
  for (var prop in obj) {
    console.log(prop + ': ' + obj[prop]);
  }
}

Food = {
  A: 'apple',
  B: 'banana',
  C: 'chocolate'  
}

printProps(Food);