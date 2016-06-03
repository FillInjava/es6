/**Array.prototype.entries()*/
var arr = ['a','b','c'];

var eArr = arr.entries();
//console.log(eArr.next().value);
//console.log(eArr.next().value);
//console.log(eArr.next().value);

//equal
for(let e of eArr){
  console.log(e); //[0,'a'],[1,'b'],[2,'c']
}

/**Array.prototype.keys()*/

var it = arr.keys();
/*for(let e of it){
  console.log(e);//0,1,2
}*/
console.log(it.next());
console.log(it.next());
console.log(it.next());
//Key iterator doesn't ignore holes
var arr2 = ["a", , "c"];

var sparseKeys = Object.keys(arr2); //稀疏的key 忽略空
var denseKeys=[...arr2.keys()]; //稠密的key 不忽略空
console.log(sparseKeys); //['0','2']
console.log(denseKeys); //[0,1,2]

/**Array.prototype.values()*/

var arr3 = ['loop','w','d','m','c','m'];
var eArr3 = arr3.values();
for(let e of eArr3){
  console.log(e);
}