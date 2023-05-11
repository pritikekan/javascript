
function show() {
         console.log("show function");
}
console.log("before function call");
show();
console.log("after function");



var num1 = 100;
var num2 = 200;

var name1 = "Billgates";
var name2 = "Elon Musk";

function swapVariables(value1,value2){
console.log("before swap:",value1,value2);
var temp=value1;
value1=value2;
value2=temp;
console.log("After swap:",value1,value2);
}
swapVariables(num1,num2);
swapVariables(name1,name2);