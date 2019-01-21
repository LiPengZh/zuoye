////定义Animal类
function Animal(){
	
}
//修改Animal类的原型
Animal.prototype.name="xxx";
Animal.prototype.type="ANIMAL";
Animal.prototype.say=function(){
	alert("I'm a(an)"+this.type+",my name is"+this.name);
}
