/**
 * 解构
 * @type {Object}
 */
let counters = {
  faves:0,
  forward:6
};

let newCounters = {...counters,faves:counters.faves+1};
console.log(newCounters) //{"faves":1,"forward":6}

let todos = [{id:0,text:"success",completed:false}];
todos = [...todos,{id:1,text:"text2",completed:true}];

console.log(todos);
//[{"id":0,"text":"success","completed":false},{"id":1,"text":"text2","completed":true}]

//创建property name和 value name相等的对象简明语法
function createPerson(name="lg",age){
  return {name,age};
}

var person = createPerson("ly",20);
console.log(person.name);//ly

//[]意味着属性名经过计算获得
var lastName = "last name";
var person2 = {
  "first name":"nick",
  [lastName] : "jhon",
  sayName(){
    return this["first name"];
  }
}

console.log(person2[lastName]); //jhon
console.log(person2.sayName()); //nick
//Object.is()
console.log(+0 == -0)//true
console.log(+0 === -0)//true
console.log(Object.is(+0,-0))//false
console.log(NaN == NaN) //false
console.log(Object.is(NaN,NaN)) //true

//Object.assign()
//Since Object.assign() uses the assignment operator,
//an accessor property on a supplier will become a data property on the receiver
var receiver = {},
    suppier = {
      get name(){
        return "lg";
      },
      set age(age){
        this.age = age;
      }
    };

 Object.assign(receiver,suppier);

 console.log(receiver);//{"name":"lg"}
 var descriptor = Object.getOwnPropertyDescriptor(receiver,"name");
 console.log(descriptor.value);//lg
 console.log(descriptor.get);//undefined
/*Own Property Enumeration Order
*1.All numeric keys in ascending order
*2.All string keys in the order in which they were added to the object
*3.All symbol keys (covered in Chapter 6) in the order in which they were
*added to the object
*/
 var obj = {
    a: 1,
    0: 1,
    c: 1,
    2: 1,
    b: 1,
    1: 1
};

obj.d = 1;
console.log(Object.getOwnPropertyNames(obj).join(""));//012acbd
//Change Prototype
const Person = {
  getGreeting(){
    return "Hello Person!";
  }
}
const Dog = {
  getGreeting(){
    return "Hello Dog!";
  }
}
/*
let friend = {
  getGreeting(){
    return Object.getPrototypeOf(this).getGreeting.call(this)+"hi";
  }
}*/
//In ES6 use super.
//super is a pointer to the current object’s prototype, effectively the Object.getPrototypeOf(this) value
let friend = {
  getGreeting(){
     // in the previous example, this is the same as:
    // Object.getPrototypeOf(this).getGreeting.call(this)
    return super.getGreeting()+"hi";
  }
/*
Similarly, you can call any method on an object’s prototype by
using a super reference, so long as it’s inside a concise method.
Attempting to use super outside of concise methods results in a
syntax error, as in this example:
 */
/*
let friend = {
  getGreeting: function(){
      // syntax error
    return super.getGreeting();
  }
}*/

Object.setPrototypeOf(friend,Person);
console.log(friend.getGreeting()); //Hello Person!, hi!
console.log(Object.getPrototypeOf(friend) === Person) //true

Object.setPrototypeOf(friend,Dog);//prototype Person=>Dog
console.log(friend.getGreeting());//Hello Dog!, hi!
console.log(Object.getPrototypeOf(friend)===Dog)//true

/**
 * The super reference is really powerful when you have multiple levels
 * of inheritance, because in that case, Object.getPrototypeOf() no longer works in all circumstances.
 * For example:
 */
let person2 = {
    getGreeting() {
        return "Hello";
    }
};

// prototype is person
let friend2 = {
    getGreeting() {
        return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
    }
};
Object.setPrototypeOf(friend2, person2);


// prototype is friend
let relative = Object.create(friend2);

console.log(person2.getGreeting());// "Hello"
console.log(friend2.getGreeting());// "Hello, hi!"
console.log(relative.getGreeting()); // error! dead loop

/**
 * The call to Object.getPrototypeOf() results in an error when
 * relative.getGreeting() is called. That’s because this is relative,
 * and the prototype of relative is the friend object. When
 * friend.getGreeting().call() is called with relative as this, t
 * he process starts over again and continues to call recursively until
 * a stack overflow error occurs
 */


