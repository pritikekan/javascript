
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

//function with argument and return va\lue


function addition(num1, num2) {
    var result  = num1 + num2;// result = 300
    return result;
}
var returnValue = addition(100, 200);
console.log("Addition of number is: ", returnValue);
var returnResult = addition(890.400, 600.3456);
console.log("Addition of number is: ", returnResult);