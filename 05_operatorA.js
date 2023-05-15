var string1 ="javascript";
var string2 ="Google Chrome";
var string3 ="Devleoper Smart";
var string4 ="I am Angular Developer"
console.log(`01. square of length of the word.....`);
function  squareOfWordLength(str){
 var stringLength = string1.length;
    console.log(`Total word length "javascript": ${stringLength}` );
    var result1= stringLength*stringLength;
    console.log(`square of javasript:${result1}`);
    console.log(`------------------------------------------------------------------------`);
    var stringLength = string2.length;
    console.log(`Total word length "Google Chrome": ${stringLength}` );
    var result2= stringLength*stringLength;
    console.log(`square of Google Chrome :${result2}`);
    console.log(`------------------------------------------------------------------------`);
    var stringLength = string3.length;
    console.log(`Total word length "Devleoper Smart": ${stringLength}` );
    var result3= stringLength*stringLength;
    console.log(`square of Devleoper Smart :${result3}`);
    console.log(`------------------------------------------------------------------------`);
}
squareOfWordLength();
console.log(`2.------------------------------------------------------------------------`);
function angular(){
    var string4 ="I am Angular Developer";
    console.log(`Given string:${string4}`);
}
angular();
console.log(`2.1------------------------------------------------------------------------`);
var stringLength = string4.length;
console.log(`string length:${stringLength}`);
var resultSplit = string4.split(" ");
console.log(`Total no of words:${resultSplit.length}`);
var result= stringLength/resultSplit.length;
console.log(`Division is ${result}`);
console.log(`2.2------------------------------------------------------------------------`);
var result=stringLength*resultSplit.length;
console.log(`string length*total words: ${result}`);
console.log(`-----------------------------------------------------------------------`);
