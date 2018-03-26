console.time();
for (var i=0; i < 100; i++) {
  if (i%10 == 0)
    console.log(i);
}
console.timeEnd();

console.time('toThousand');
for (var j=0; j < 1000; j++) {
  if (j%100 == 0)
    console.log(j)
}
console.timeEnd('toThousand');

console.time('toTenThousand');
for (var j=0; j < 10000; j++) {
  if (j%1000 == 0)
    console.log(j)
}
console.timeEnd('toTenThousand');