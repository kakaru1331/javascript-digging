var arr = [2, 4, 6, 8, 10];
arr.food = 'chicken';

for (let prop in arr) {
  console.log(prop); // 0, 1, 2, 3, 4, 'food'
}

for (let val of arr) {
  console.log(val); // 2, 4, 6, 8, 10
}