console.log("================Function Expression===============");
console.log("01.Square of the no. 5,6,25,100");
var square = function (num1,num2,num3,num4) {
    var result1 = num1*num1;
    var result2 = num2*num2;
    var result3 = num3*num3;
    var result4 = num4*num4;
    console.log(`square of 5:${result1}`);
    console.log(`square of 6:${result2}`);
    console.log(`square of 25:${result3}`);
    console.log(`square of 100:${result4}`);
}
square(5,6,25,100 );
console.log("-------------------------------------------------------");
console.log("02.Check and log the type of function");
var square =function(){
 var typeOfsquare =typeof square;
 console.log(`Type of function:${typeOfsquare}`);
}
square();
console.log("-------------------------------------------------------");
console.log("03.Area of rectangle");
var areaOfPlot =function(length,width){
    Area=length*width;
    console.log(`Area of rectangle :${Area}`);
}
 areaOfPlot(499,917);
 console.log("-------------------------------------------------------");
 console.log("Swap values");
 
 var swapValues =function(arg1,arg2){
    console.log(`before swap:${arg1},${arg2}`);
    var temp=arg1;
    arg1=arg2;
    arg2=temp;
    console.log(`after swap:${arg1},${arg2}`);
}
swapValues("virat","anushka");
swapValues(1000,2000);
console.log("-------------------------------------------------------");
console.log("05. FE for string");
 var stringHandsOn = function(){
var string ="JS the most popular language of internet";
console.log("1.Total character available in the string");
var stringLength=string.length;
console.log(`Total number of character in given string is:${stringLength}`);
console.log("02.Character at index 6");
var charAtIndexSix= string.charAt(6);
console.log(`Char at index 6 is:${charAtIndexSix}`);
console.log("03.Character at index 11");
var charAtIndexEleven= string.charAt(11);
console.log(`Char at index 11 is:${charAtIndexEleven}`);
console.log("04.Last character using length property");
var charAtLastIndex = string.charAt(string.length-1);
console.log(`Char at last index: ${charAtLastIndex}`);
console.log("05 first charcter  from string");
var charAtZeroIndex = string.charAt(0);
console.log(`Char start character: ${charAtZeroIndex}`);
var resultSplit = string.split(" ");
console.log(` Total number of words ${resultSplit.length} and its  square is ${resultSplit.length*resultSplit.length} `);
 }
 stringHandsOn();
 
