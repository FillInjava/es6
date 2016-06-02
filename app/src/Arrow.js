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