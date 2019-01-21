 //定义Animal类的构造函数
 function Animal(){
	
 }
 var a= Animal.prototype;	//a指向Animal类对应的原型
   var b=a.constructor;		//b指向对应的类的构造函数
   alert(b==Animal);//true
//var a=1;
//console.log(a);