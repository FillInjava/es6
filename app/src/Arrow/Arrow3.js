var arguments = 42;

var arr = ()=>arguments;

console.log(arr());//42

function foo(){
  var f = (i) => arguments[0]+i;

  return f(2);
}

console.log(foo(1));

//隐式return
var func = x => x*x;
console.log(func(2));
var func2 = x => {return x*x};
console.log(func2(2));