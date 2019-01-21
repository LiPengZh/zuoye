//定义Animal类
function Animal (name){
	this.name=name;
	this.type="animal";
}
Animal.prototype={
	say :function(){
		alert("I'm a(an)"+this.type+",my name is " +this.name);
	}
}

//定义Bird类
function Bird(name){
	Animal.call(this,name);
}
Bird.prototype=Animal.prototype;
Bird.prototype.constructor=Bird;
Bird.prototype.fly=function(){
	alert("I'm flying")
}
//实例化Bird对象
var myBird=new Bird("xiaocui");

//alert(myBird.type);//Animal
myBird.fly();
myBird.say();//I'm a(an)animal,my name is xiaocui
//alert(type);
var myDog=new Bird("xaxa");
myDog.fly();//错
