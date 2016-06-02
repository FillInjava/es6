var a;
console.log(a);//undefined

//console.log(b);//referenceError
//var b;//变量提升//

//console.log(x); //error
let x;

if(x === undefined){
	//execute
	console.log(true);
}

if(x == false){
	//no execute
	console.log(true);
}

var myArray = [];

if(!myArray[0])
	console.log(true); //true

var c;
	console.log(c+2); //NaN

var n = null;
	console.log(n*32); //0

if(true){
	var m = 5;
}
console.log(m);//5

if(true){
	let o = 6;
}
//console.log(o); ERROR

//variable hoisting 变量提升
console.log(q === undefined);
var q = 3;

var myvar = "my value";
(function(){
	console.log(myvar); //undefined
	var myvar = "local value";
})();

(function(){
	console.log(myvar); //"my value"
})();

(() => {console.log(myvar);var myvar="local value";})();//undefined
