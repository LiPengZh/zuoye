Object.prototype.test=function(){
	alert("hello world");
}
var a=[1,2,3],b="abc",c={},d=true,e=function(){};
a.test();
b.test();c.test();
d.test();e.test();function Dog(o){
	this.name=o;
}
Dog.prototype.tostring=function(){
	return "my name is "+this.name;
}
var f=new Dog("asasdas");
f.test();
