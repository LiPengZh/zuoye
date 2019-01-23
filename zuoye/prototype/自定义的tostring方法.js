function Dog(o){
	this.name=o;
}
var myDog=new Dog("wangcai");
alert(myDog);
Dog.prototype.tostring=function(){
	return "my name is"+this.name;
}
alert(myDog);
var me={
	name:"adang",
	email:"clsadas",
	tostring:function(){
		return "I'm adang,my email is sadasd";
	}
}
alert(me);
