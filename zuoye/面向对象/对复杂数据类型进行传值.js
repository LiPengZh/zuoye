var a=[1,2,3],b={name:"adang",sex:"male",tel:"1234566"};
var c=[],d={};
for (var p in a) {
	c[p]=a[p];
}
for (var p in b) {
	d[p]=b[p];
}
c.push("4");
d.email="xxxxx";
alert(a);//1,2,3
alert(c);//1,2,3,4
alert(b.email);
