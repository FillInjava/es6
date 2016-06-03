var fruits = [];
fruits.push('banana','apple','peach');

console.log(fruits.length);

fruits[5] = 'mango';
console.log(fruits[5]);
console.log(Object.keys(fruits));
console.log(fruits.length);

fruits.length = 10;
console.log(fruits.length);