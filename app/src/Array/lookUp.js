
/**
*Array的查找方法包括find,findIndex
* indexOf,lastIndexOf	
*/

/**数组的查找方法find,findIndex
*查找出数组中满足某个条件的元素
*成功则返回该元素，否则返回undefined
*Array.prototype.find(fn[,thisArg]);
*fn(currentValue,index,array);
*/

var inventory=[
	{name: 'apples',quantity:2},
	{name: 'bananas',quantity:0},
	{name: 'cherries',quantity:5}
];

var findFruits = (arr,name) => {
	return arr.find(ele => ele.name === name);
};

console.log(findFruits(inventory,'cherries'));

/**查找数组中的第一个素数*/

var isPrime = ele => {
	var start = 2;
	while(start <= Math.sqrt(ele)){
		if(ele % start++ < 1){
			return false;
		}
	}
	return ele > 1;
};

console.log([4,8,6,12].find(isPrime)); //undefined,not found
console.log([4,5,6,11].find(isPrime)); //5

//findIndex
console.log([4,8,6,12].findIndex(isPrime));
console.log([4,5,6,11].findIndex(isPrime));

/**
*数组的indexOf和lastIndexOf查找
*如果存在该元素则返回index,否则返回-1
*/
//indexOf(searchElement[,fromIndex=0]),始终是正向查找
/**
* formIndex > arr.length 整个数组都会被查找
* -arr.length < fromIndex <0 相当于从arr.length+fromIndex处开始查找
* arr.length+fromIndex < 0,会查询整个数组
*/
var array = [2,9,9];
array.indexOf(2); //0
array.indexOf(7); //-1
array.indexOf(9,2); //2
array.indexOf(2,-1); //-1
array.indexOf(2,-3);//0
console.log("arr.length+fromIndex < 0:"+array.indexOf(2,-4));//0

//查找数组中所有指定的元素
var indices = [];
var array2 = ['a','b','a','v','a','a'];
var indx = array2.indexOf('a');

while(indx > -1){
	indices.push(indx);
	indx = array2.indexOf('a',indx+1);
}
console.log(indices);//[0,2,4,5]

//查找一个数组中是否存在某个元素，如果没有则更新

var updateIfNotContains = (arr,ele) => {
	if(arr.indexOf(ele) === -1){
		arr.push(ele);
		console.log('new Element is:'+ele);
	}else{
		console.log(ele +' already exists in the array.');
	}
};

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateIfNotContains(veggies,'spinach');
updateIfNotContains(veggies,'spinach');

//arr.lastIndexOf(searchElement[,fromIndex = arr.lenght-1])，始终是逆向查找
/**
* formIndex > arr.length 整个数组都会被查找
* -arr.length < fromIndex <0 相当于从arr.length+fromIndex处开始查找
* arr.length+fromIndex < 0,则直接返回-1，也就是不会查询.注意这一点和indexOf不同.
*/

var array3 = [2,5,9,2];

array3.lastIndexOf(2);//3
array3.lastIndexOf(7);//-1
array3.lastIndexOf(2,3);//3
array3.lastIndexOf(2,2);//0
array3.lastIndexOf(2,-2);//0
array3.lastIndexOf(2,-1);//3 
console.log("arr.length+fromIndex < 0:"+array3.lastIndexOf(2,-4));//0
console.log("arr.length+fromIndex < 0:"+array3.lastIndexOf(2,-5));//-1

//使用lastIndexOf查找所有指定元素：
var indices3 = [];
var array4 = ['a','b','a','v','a','a'];
var indx3 = array4.lastIndexOf('a');

while(indx3 != -1){
	indices3.push(indx3);
	indx3 = indx3 > 0 ? array4.lastIndexOf('a',indx3-1) : -1;
}
console.log(indices3); //[5,4,2,0]
//必须单独处理 idx == 0 时的情况.
//如果indx ==0,array.lastIndexOf(element, idx - 1) 会从最后一个元素向前查找，
//这样就重复查找，且死循环了，所以要做一个判断，而且已经查找到第一个元素了，就该结束了