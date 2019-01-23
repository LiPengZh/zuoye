function myArray(o){
	this.getArray=function(){
		return o;
	};
}
myArray.prototype={
	each:function(fun){
		var o=this.getArray();
		for (var i=0,n=o.length;i<n;i++) {
			fun(o[i],i);
		}
	}
}
var a=new myArray([1,2,3]),str="";
a.each(function(v,k){
	str+=k+":"+v+"\n";
});
alert(str);
