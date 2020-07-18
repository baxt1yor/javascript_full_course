let myobj = {
	user: "baxtiyor",
	age: 13
};

let obj = {
	user_name: "bir nima"
};

myobj.__proto__ = obj;

console.log(myobj.user_name); //return bir nima