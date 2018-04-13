exports.printTimesTable = (dan) => {
  for (var i=1; i <= dan; i++) {
    for (var multiple=1; multiple <= 9; multiple++)
      console.log(`${i} * ${multiple} = ${i*multiple}`);    
    
    console.log();
  }
}