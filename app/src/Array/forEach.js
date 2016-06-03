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
