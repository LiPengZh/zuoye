var a=[1,2,3];
var b=a.slice(), c=a.concat();b.pop();
c.push(4);
alert(a)//1,2,3
alert(b);//1,2
alert(c)//1,2,3,4
