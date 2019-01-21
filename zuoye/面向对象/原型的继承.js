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
//实例化Bird对象
var myBird=new Bird("xiaocui");
//alert(myBird.type);//Animal

myBird.say();//I'm a(an)animal,my name is xiaocui
//alert(type);
