//函数作为普通函数
function sayHi(){
	alert("hi");
}
sayHi();
//函数作为类
function Animal(name){
	this.name=name;
	this.type="animal";
	this.say=function(){
		alert("I'm a(an)"+this.type+",my name is "+this.name);
	}
}
//实例化Animal类
var myDog =new Animal("wangcai");
console.log(myDog.say());
