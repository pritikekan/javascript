console.log("1.function with no argument-----------------------------");

function game() {
    console.log("After function call:","my favourite player is MS DHONI");
}
console.log("before function call:","My favourite sport is cricket");
game();


console.log("2.function with argument-----------------------------");
console.log("-------------personalDetails------------------------------");

var name1 = "priti";
var name2 = "kekan";
var name3 =" AVCOE";
function personalDetails(value1,value2,value3){
console.log("Name:",value1,value2);
console.log("CollegeName:",value3);
}
personalDetails(name1,name2,name3);
console.log("3.--------------------------------------------------------");

var name1= "virat";
var name2 ="Anushka";
var num1=1000;
var num2=2000;
function SwapValuesDude(arg1,arg2){
    console.log("before fun call:","1.",arg1,"2.",arg2);
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log("After fun call:","1.",arg1,"2.",arg2);
}
SwapValuesDude(name1,name2);
console.log("----------------------------------------------------");
SwapValuesDude(num1,num2);
console.log("4.--------------------------------------------------------");
var num1=10.23;
var num2=600;
var num3=40;

var name1="Hello"
var name2="Good"
var name3="Morning"
function addThreeValues(a,b,c){
     var result=a+b+c;
    console.log("Addition is",result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");

console.log("==============================================================");





