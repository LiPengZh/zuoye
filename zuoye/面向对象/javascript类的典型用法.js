//定义Animal类
function Animal(name){
	this.name=name ||"xxx";
	this.type="animal";
}
//修改Animal类的原型
Animal.prototype={
	say:function(){
			alert("I'm a(an)"+this.type+",my name is"+this.name);
	}
}
//实例化Animal类
var myDog =new Animal("wangcai");
myDog.say();//I'm a(an)animal,my name iswangcai
