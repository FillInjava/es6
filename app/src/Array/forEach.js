/**
*arr.forEach(callback[, thisArg])
*
* callback:
*		currentValue:当前遍历的元素
*		index：当前遍历元素的下标
*		array：被遍历的数组
*  
* thisArg:可选参数
*		Value to use as this when executing callback.
*
*
*/
var logArrayElement = 
	(element,index,array)=>console.log('a['+index+']='+element);
// Notice that index 2 is skipped since there is no item at
// that position in the array.
[2,5, ,9].forEach(logArrayElement);
//a[0] = 2
//a[1] = 5
//a[3] = 9

//传递this
class Counter{
	constructor(){
		this.sum = 0;
		this.count = 0;
	}
	add(arr){
		arr.forEach(entry=>{this.sum+=entry;++this.count}
			,this);
	}
	get fnCount(){
		return this.count;
	}
	get fnSum(){
		return this.sum;
	}
};

var obj = new Counter();
obj.add([2,5,,9]);
console.log(obj.count);//3
console.log(obj.sum);//16
console.log(obj.fnSum);//16
console.log(obj.fnCount);//3
/**
*复制一个对象
*/
var copy = obj =>{
	var copy = Object.create(Object.getPrototypeOf(obj));

	var propNames = Object.getOwnPropertyNames(obj);

	propNames.forEach(name => {
		var desc = Object.getOwnPropertyDescriptor(obj,name);
		Object.defineProperty(copy,name,desc);
	});
	return copy;
}

var obj1 = {a:1,b:2};
var obj2 = copy(obj1);
console.log(obj2);

/**forEach的过程中不能中断，如果想要检测数组中每个
*元素是否都满足某个条件，推荐使用every方法
*/

var test1 = [12,10,5,130,440].every((ele,index) => 
		{console.log(index);return ele >= 10});
//0,1,2
var test2 = [12,10,11, ,130,440].every((ele,index) => 
		{console.log(index);return ele >= 10});
//0,1,2,4,5
console.log(test1);//false
console.log(test2);//true

/**同理如果有任意一个元素满足条件则返回true，可以用some*/

var test3 = [1,10,5,9,6].some(ele => ele > 10);
console.log("test3="+test3);
var test4 = [1,10,15,9,6].some(ele => ele > 10);
console.log("test4="+test4);

//检测数组中是否存在某个元素
var fruits = ['apple','banana','mango','guava'];

var contains = (arr,value) => {
	return arr.some(ele => ele === value);
};

console.log(contains(fruits,'kela'));
console.log(contains(fruits,'banana'));

