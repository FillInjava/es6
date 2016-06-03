let empty = () => {};
console.log(empty()); //undefined

//立即执行
var a = (()=>"foobar")();
console.log(a); //"foobar"

var simple = a => a > 15 ? 15 : a;

console.log(simple(10)); //10
console.log(simple(16)); //15

let max = (a,b) => a > b ? a : b;
console.log(max(8,5));
console.log(max(15,25));

var arr = [5,6,13,0,1,18,23];
var sum = arr.reduce((a,b)=> a+b);
console.log("sum="+sum);
var even = arr.filter(v => v % 2 === 0);
console.log("even="+even);
var double = arr.map(v => v*v);
console.log(double);
