
ECMAScript 6学习
====
参考：
		英文：https://developer.mozilla.org/en-US/docs/Web/JavaScript
		中文：https://developer.mozilla.org/en-US/docs/Web/JavaScript

## 一、Arrow function箭头函数
	shorter functions and lexical this
####基本语法:
	(param1, param2, …, paramN) => { statements }
	(param1, param2, …, paramN) => expression
     // 等价于:=>{ return expression; }

	// 当只有一个参数时，参数的括号是可选的:
	(singleParam) => { statements }
	singleParam => { statements }

	// 没有参数的函数括号是必须的:
	() => { statements }
####高级语法:
	1.用括号包围函数体返回一个对象字面量：
		param => ({key: param})
		//注意必须用括号将{key: param}包起来,因为Arrow function会将{}解析为语句块执行
	
	2.支持Rest风格的参数和默认参数：
		(param1,param2,...restArg) => {statements} //rest
		(param1=defaultVal1,...,paramN=defaultValN) => {statements} //default param
	
	3.在参数中支持解构:
		var a = ([a,b]=[1,2],{x:c}={x:a+b}) => a+b+c; //a() == 6
#### Example
##### 1.简洁的函数：
	var arr = ["libai","dufu","sushi","xinqiji","liqingzhao"];
	//传统写法:
	arr.map(function(s){
		return s.length;
	});
	//箭头函数:
	arr.map(s => s.length);//[5,4,5,7,10]
	
##### 2.词法绑定this(也称静态绑定)
	在箭头函数之前，函数定义自己的this.这对于面向对象风格编程来说是非常令人讨厌的
	function Person(){
		//Person构造函数定义this表示自己的实例对象
		this.age = 0;
		setInterval(function(){
			//在非严格的模式中,该函数的this表示的是全局对象global\window.
			//与Person构造函数中定义的this不同.
			this.age ++;
		},1000);
	}
	var p = new Person();
	
	在ECMAScript 3/5 这个问题可以通过将this付给一个变量来解决：
	
	function Person(){
		this.age = 0;
		var that = this; //将Person的this保存到that变量
		setInterval(function(){
			that.age ++; //that指向的是Person中定义的this
		},1000);
	}

	箭头函数会捕获闭合上下文的this,因此如下也可以达到预期效果：
	
	function Person(){
		this.age = 0;
		setInterval(() => this.age++ ,1000); //这里的this指向Person的实例
	}

##### 3.通过call或者apply调用
	由于this已经被静态绑定，所以使用call和apply调用只能传递参数，而不能影响this

	var adder = {
		base: 1,
		
		add: function(a){
			var f = x => this.base+x;
			return f(a);
		},
		addThroCall: function(a){
			var b = {
				base:2
			}
			var f = x => x+this.base; //静态绑定this到adder
			return f.call(b,a); //这里通过call调用只能传递参数不影响this
		}
	}
	console.log(adder.add(1));//2
	console.log(adder.addThroCall(1)); // not 3 but 2



	



	 

	
	