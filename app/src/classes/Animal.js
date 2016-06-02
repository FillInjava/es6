class Animal {
	constructor(name) {
		this.name = name;
	}

	speak(){
		console.log(this.name+' makes a nosie.');
	}
}

class Dog extends Animal {
	constructor(name,age){
		super(name);
		this.age = age;
	}
	speak(){
		super.speak();
		console.log(this.name+' barks. The age is'+this.age);
	}
}
class Cat extends Animal {
	constructor(name,age){
		super(name);
		this.age = age;
	}
	speak(){
		super.speak();
		console.log(this.name+' miao. The age is'+this.age);
	}
}
class DogMan extends Dog {
	constructor(name,age,male){
		super(name,age);
		this.male = male;
	}
	speak(){
		super.speak();
		console.log(this.name+' miao. The age is'+this.age+' this male '+this.male);
	}
}

const animal = new Animal("animal");
const dog = new Dog("dog",20);
const cat = new Cat("cat",20);
const dogMan = new DogMan("dogMan",20,'man');
dogMan.speak();

animal.speak();
dog.speak();
cat.speak();
console.log(dog instanceof Animal);//true
console.log(dog instanceof Dog);//true