var numbers = [1,4,9];

var roots = numbers.map(Math.sqrt);
console.log(numbers);
console.log(roots);

//Using map to reformat objects in an array
var kvArray = [{key:1,value:10},{key:2,value:20},{key:3,value:30}];

var formatArray = kvArray.map(obj =>{
	let rObj = {};
	rObj[obj.key] = obj.value;
	return rObj;
});
console.log(formatArray);//[ { '1': 10 }, { '2': 20 }, { '3': 30 } ]
//

var a = Array.prototype.map.call('Hello World',x=>x.charCodeAt(0));
console.log(a);

//Using map to reverse a string
var str = '12345';
var resStr = Array.prototype.map.call(str,x=>x).reverse().join('');
console.log(resStr);

//Consider:
console.log(['1','2','3'].map(parseInt));
// While one could expect [1, 2, 3]
// The actual result is [1, NaN, NaN]

//repair it
console.log(['1','2','3'].map(x=>parseInt(x)));//[1,2,3]
//or
console.log(['1','2','3'].map(Number));//[1,2,3]