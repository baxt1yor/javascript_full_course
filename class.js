class MyClass {
	constructor (a, x) 
	{
		this.a = a;
		this.x = x;
	}    
	speak() {
		console.log(`${this.a} shu a`);
	}
	static myfunc(z, d){
		let z1 = z;
		let d1 = d;
		return d1 + z1;
	}
	get b(){
		return this.a;
	}
	
}


class Myy extends MyClass{
	
}

let classs = new Myy(4, 5);

console.log(classs.speak());
