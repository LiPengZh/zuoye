//定义Animal类
function Animal(name){
	this.name=name;
	this.type="animal";
}
Animal.prototype={
	say:function(){
		alert("I'm a(an)"+this.type+",my name is "+this.name);
	}
}
//定义Bird类
function Bird(name){
	Animal.call(this,name);
}
Bird.prototype=Animal.prototype;
Bird.prototype.fly=function(){
	alert("I'm flying");
}
//实例化Bird对象
var myBird=new Bird("xiaocui");
myBird.say();//I'm a(an)animal,my name is xiaocui
myBird.fly();//I'm flying
var myDog=new Animal("wangcai");
myDog.fly();//I'm flying
