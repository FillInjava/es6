/*ES6解构*/
/**
 * 1.对象解构
 */
let node = {
  type : "node5",
  name : "lg"
};
let {type,name,value} = node;

console.log(type); //node5
console.log(name); //lg
console.log(value); //undefined

//如果没有则默认
//let {type,name,value=true} = node;
//console.log(value);//true


/**
 * When using destructuring to declare variables using var, let, or const,
 * you must supply an initializer (the value after the equals sign).
 * The following lines of code will all throw syntax errors due to a missing initializer:
 */
// syntax error!
var { type, name };

// syntax error!
let { type, name };

// syntax error!
const { type, name };

//While const always requires an initializer, even when using nondestructured variables,
//var and let only require initializers when using destructuring.

/**
 * 2.解构赋值
 */
let person = {
  age: "20",
  sex: "man"
},
age = "30",
sex = "woman";

console.log(age); //30
console.log(sex); //woman
//重新赋值
({age,sex} = person);
console.log(age); //20
console.log(sex); //man

/**
* Note that you must put parentheses around a destructuring assignment statement.
*That’s because an opening curly brace is expected to a be a block statement,
*and a block statement cannot appear on the left side of an assignment.
*The parentheses signal that the next curly brace is not a block statement and should be interpreted as an expression,
*allowing the assignment to complete
*/
/**
 * An error is thrown when the right side of the destructuring assignment expression (the expression after =) evaluates to null or undefined.
 * This happens because any attempt to read a property of null or undefined results in a runtime error.
 */

/**
 * 3.解构不同属性的变量
 */
let diff = {
  type: "node",
  name: "lg"
};

let {type:localtype,name:localname} = diff;
//let {type:localtype,name:localname = "bar"} = diff;

console.log(localtype); //node
console.log(localname); //lg

/**
 * 4.嵌套对象解构 Nested Object Destructuring
 */
let node3 = {
  type: "Identifier",
  name: "foo",
  loc: {
    start:{
      line:1,
      column:1
    },
    end:{
      line:1,
      column:4
    }
  }
};

let {loc:{start}} = node3;
console.log(start.line); //1
console.log(start.column); //1

/**
 * 5.数组解构
 *The destructuring operates on positions within an array,
 *rather than the named properties that are available in objects
 */

let colors = ["red","green","blue"];

let [firstColor,secondColor] = colors;

console.log(firstColor); //red
console.log(secondColor); //green

let [ , , thirdColor ] = colors;
console.log(thirdColor);        // "blue"

/**
 * 6.数组解构赋值
 *You can use array destructuring in the context of an assignment,
 *but unlike object destructuring, there is no need to wrap the expression in parentheses.
 *For example:
 */

let colors = [ "red", "green", "blue" ],
    firstColor = "black",
    secondColor = "purple";

[ firstColor, secondColor ] = colors;

console.log(firstColor);        // "red"
console.log(secondColor);       // "green"

//Array destructuring assignment has a very unique use case that makes it easier to swap the values of two variables.

//before:
// Swapping variables in ECMAScript 5
let a = 1,
    b = 2,
    tmp;

tmp = a;
a = b;
b = tmp;

console.log(a);     // 2
console.log(b);     // 1

//in es6:
[a,b] = [b,a];

/**
 * 7 rest item ...
 */

let colors = [ "red", "green", "blue" ];

let [ firstColor, ...restColors ] = colors;

console.log(firstColor);        // "red"
console.log(restColors.length); // 2
console.log(restColors[0]);     // "green"
console.log(restColors[1]);     // "blue"

//clone array

//in es5
var colors = ["red","green","blue"];
var cloneColors = colors.concat();
console.log(cloneColors); //["red","green","blue"]

//in es6
let colors = ["red","green","blue"];

let [...cloneColors] = colors;
console.log(cloneColors); //["red","green","blue"]
/**
 * 8.Mixed Destructuring
 */
let node = {
        type: "Identifier",
        name: "foo",
        loc: {
            start: {
                line: 1,
                column: 1
            },
            end: {
                line: 1,
                column: 4
            }
        },
        range: [0, 3]
    };

let {
    loc: { start },
    range: [ startIndex ]
} = node;

console.log(start.line);

/**
 * 9.Destructing Parameter
 */

/**
 * 使用解构参数时是必须传的，如果不传会报语法错误.
 * 使用默认参数防止此语法错误.
 * 并且为每个option都提供了默认值.
 * @param {[type]} name             [description]
 * @param {[type]} value            [description]
 * @param {[type]} options.secure   [description]
 * @param {[type]} options.path     [description]
 * @param {[type]} options.domain   [description]
 * @param {Object} options.expire} [description]
 */
function setCookie(name,value,{
  secure = false,
  path = "/",
  domain = "example.com",
  expire =new Date(Date.now() + 360000000)
} = {}){
  console.log("secure="+secure+",path="+path+",domain="+domain+",expire="+expire);
}

setCookie("lg","dd",{
  "secure": true,
  "expire":1000
});  //secure=true,path=/,domain=example.com,exp=60000
