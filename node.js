console.log("wlecome to node");
var http= require("http");
var a = 10;
var b = 20;
var c = a+b;
console.log("A value is=" +a);
console.log("B value is=" +b);
console.log("sum=" +c);
if(c>30)
{
    console.log("c is > 45");
}
else
{
    console.log("c is < 45");   
}
http.createserver(function(req,res){
}).listen(5000);