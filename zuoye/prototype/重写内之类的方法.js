var a=[1,2,3];
alert(a);
Array.prototype.toString=function(str){
	return "I'm an array";
}
alert(a);
