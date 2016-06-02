class MyArray extends Array{
	static get [Symbol.species](){
		return Array;
	}
}

var a = new MyArray(1,2,3);
var map = a.map(x => x*x);

console.log(a instanceof MyArray);//true
console.log(a instanceof Array);//true
console.log(map instanceof MyArray);//false
console.log(map instanceof Array);//true