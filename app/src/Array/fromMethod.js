/**
 * Array.from(arrayLike[, mapFn[, thisArg]])
 * Parameters
 *arrayLike: An array-like or iterable object to convert to an array.
 *mapFn: Optional. Map function to call on every element of the array.
 *thisArg: Optional. Value to use as this when executing mapFn.
 *Array.from() lets you create Arrays from:

*array-like objects (objects with a length property and indexed elements) or
*iterable objects (objects where you can get its elements, such as Map and Set).
*Array.from() has an optional parameter mapFn, which allows you to execute a map
*function on each element of the array (or subclass object) that is being created.
* More clearly, Array.from(obj, mapFn, thisArg) is the same as Array.from(obj).map(mapFn, thisArg),
*  except that it does not create an intermediate array.
*  This is especially important for certain array subclasses,
*  like typed arrays, since the intermediate array would necessarily
*  have values truncated to fit into the appropriate type.
*The length property of the from() method is 1
 *
 */

// Array-like object (arguments) to Array
function f(){
  return Array.from(arguments);
}

console.log(f(1,2,3));//[1,2,3]

//any iterator object

//set
var s = new Set(["foo","aa"]);
console.log(Array.from(s));

//map
var m = new Map([[1,2],[3,4],[5,6]]);
console.log(Array.from(m));

//String
console.log(Array.from("liuguo"));

//using arrow as a map function
var a = Array.from([1,2,3],x => x*2);
console.log(a);

// Generate a sequence of numbers
var k = Array.from({length: 10}, (v, k) => k);
console.log(k);//[0,1,2,3,4,5,6,7,8,9]