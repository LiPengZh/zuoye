//定义电话本
var phonebook=[
    {name:"adang",tel:"111111"},
    {name:"zhangxia",tel:"2222"},
    {name:"yang",tel:"3333"},
    {name:"qiao",tel:"4444"},
    {name:"zhuo",tel:"5555"},
]
//2
var phonebook2=[
    {name:"niao",tel:"111"},
    {name:"j2ee",tel:"222"},
    {name:"bao",tel:"333"}
];
//查询电话
function getTel(oPhonebook,oName){
    var tel="";
    for(var i=0;i<oPhonebook.length;i++){
        if(oPhonebook[i].name==oName){
            tel=oPhonebook[i].tel;
            break;
        }
    }
    return tel;
}
//添加纪录
function addItem(oPhonebook,oName,oTel){
    oPhonebook.push({name:oName,tel:oTel});
}
//删除记录
function removeItem(oPhonebook,oName){
    var n;
    for(var i=0;i<oPhonebook.length;i++){
        if(oPhonebook[i].name==oName){
            n=i;
            break;
        }
    }
    if(n!=undefined){
        oPhonebook.splice(n,1);
    }
}
//查
// var str =getTel(phonebook,"zhangxia");
// alert(str);

addItem(phonebook,"zhangxia","9999");
str=getTel(phonebook,"zhangxia");
alert(str);