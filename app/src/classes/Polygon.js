//var p = new Polygon();//Error .no Hoisting
class Polygon{
	constructor(height,width){
		this.height = height;
		this.width = width;
	}

	get area(){
		return this.calcArea();
	}
	calcArea(){
		return this.height*this.width;
	}
}
const p = new Polygon(10,10);
console.log(p.area);
//unnamed expression
/*var Polygon = class {
	constructor(height,width){
		this.height = height;
		this.width = width;
	}
};*/
//named expression
/*var Polygon = class Polygon{
	constructor(height,width){
		this.height = height;
		this.width = width;
	}
}*/