var fruits = ["Apple","Banna","cat"];

fruits.forEach(function(item,index,array){
  console.log(item,index,array);
});

fruits.push("strawberry");

var pos = fruits.indexOf("Banna");
//移除元素
var removedItem = fruits.splice(pos,1);
console.log(fruits);

var arr = new Array(10);
console.log(arr.length);//10
var arr2 = new Array(10,20);
console.log(arr2.length);//2