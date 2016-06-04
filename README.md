
ECMAScript 6学习
====
##Arrow function箭头函数
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

	 

	
	