var a = ["Hydrogen","Helium","Lithium","Beryllium"];

var a2 = a.map(name => name.length);
console.log(a2);

function Person(){
  this.age = 1;

  //setInterval(() => {this.age++;console.log(this.age);},1000);
  setInterval(() => this.age++,1000);
}

//var p = new Person();
//setInterval(function(){console.log(p.age)},1000);

var f = () => {'use strict'; return this};
//f()--->{}
console.log(f()===global); //false in node js

var adder = {
  base: 1,
  add: function(a){
    var f = (v) => this.base+v;

    return f(a);
  },
  addThruCall: function(a){
    var f = (v) => this.base+ v;
    var b = {
      base: 2
    };
    return f.call(b,a);
  }
};
console.log(adder.add(1));//2
console.log(adder.addThruCall(1)); //2 not 3


