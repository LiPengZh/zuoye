Array.prototype.each=function(fun){
	for(var i=0,n=this.length;i<n;i++) {
		fun(this[i],i);
	}
}
Array.prototype.clone=function(){
	var o=[];
	this.each(function(v,k){
		o[k]=v;
	});
	return o;
}
Array.prototype.map=function(fun){
	var o=[];
	this.each(function(v,k){
		o[k]=fun(v,k);
	});
	return o;
}
//ie中delete保留
Array.prototype.Delete=function(a){
	var o=this.clone();
	for(var i=o.length,n=0;i>n;i--){
		if(o[i]==a){
			o.splice(i,1);
		}
	}
	returno;
}
var a=[1,2,3,2,4,5];
var str="";
a.each(function(v,k){
	str+=k+":"+v+"\n";
});
alert(str)//0:1 1:2
