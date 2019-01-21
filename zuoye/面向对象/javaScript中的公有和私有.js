//定义Animal类
function Animal(name,age){
	//公有属性
	this.name=name || "xxx";
	this.type="animal";
	//私有属性
	var  age =20;
	//私有方法
	this .move =function(){
		alert("I'm moveing now");
	}
}
//修改Animal类的原型
Animal.prototype={
	//公有方法
	say:function(){
		alert("I'm a(an)"+this.type+",my name is"+this.name);
	}
}
//实例化Animal类
var myDog=new Animal("wangcai",20);
alert(myDog.name);
alert(myDog.age);
myDog.move();
