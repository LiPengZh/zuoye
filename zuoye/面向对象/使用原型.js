//定义Animal类
function Animal(){
	
}
//修改Animal类的原型
Animal.prototype={
	name:"xxx",
	type:"animal",
	say :function(){
		alert("I'm a(an)"+this.type+",my name is"+this.name);
		
	}
}
//实例化Animallei
var myDog=new Animal();
myDog.say();//I'm a(an)animal,my name isxxx
