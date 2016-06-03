var evens = [1,2,3,4,5,6,7,8,9,10,15];

var odds = evens.map(v => v+1);
console.log("odds:"+odds);
var nums = evens.map((v,i) => v+i);
console.log("nums:"+nums);
var pairs =evens.map(v => ({even: v, odd: v + 1}));
console.log("pairs:"+pairs);
var fives = [];

nums.forEach(v => {if(v%5 === 0){fives.push(v);}});
console.log("fives:"+fives);

var bob = {
  name: "Bob",
  friends:["John","kevin","Swift"],
  printFriends(){
    this.friends.forEach(
      f => console.log(this.name+" knows "+ f)
    );
  }
}
bob.printFriends();
//rest parameter
var fun = (...rest) => {console.log(rest.length)};
fun();//0
fun(1,2,3);//3
fun(1,2);//2
//default parameter
var fun2 = (a = 1,b = 2) => {console.log(a+b)};
fun2();
fun2(2,3);
//Destructuring
var fun3 = ([a,b] = [1,2],{x:c} = {x: a+b}) => {console.log(a+b+c)};
fun3();
fun3([2,4]);
fun3([2,4],{x:5});