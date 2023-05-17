console.log(`1.Greatest number amongst two number`);
console.log(`---------------------------------------------------`);
var greaterNumber=function(num1,num2){
var result = num1>num2 ? `${num1}is greater`:`${num2}is greater`;
console.log(`Greatest number:${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899)
console.log(`---------------------------------------------------`);
console.log(`2.Given number is even or odd`);
var isEvenOrOddNum = function(num){
    var result= num%2 == 0 ? true : false;
    return result;
}
 var result = isEvenOrOddNum(29);
 var res = (result == true) ? `29 is even`:`29 is odd`;
 console.log(`number is even or odd:${res}`);
 var result = isEvenOrOddNum(44);
 var res = (result == true) ? `44 is even`:`44 is odd`;
 console.log(`number is even or odd:${res}`);
 var result = isEvenOrOddNum(0);
 var res = (result == true) ? `0 is even`:`0 is odd`;
 console.log(`number is even or odd:${res}`);
 var result = isEvenOrOddNum(101);
 var res = (result == true) ? `101 is even`:`101 is odd`;
 console.log(`number is even or odd:${res}`);
 console.log(`---------------------------------------------------`);
 console.log(`3.Given word has even or odd length`);
 var wordlength = function(word){
  var len = word.length;
  var result= len%2 ==0 ? "even":"odd";
  return result;
 }
var value = wordlength("javascript");
console.log(`Javascript has : ${value}`);
var value = wordlength("developer");
console.log(`developer has : ${value}`);
var value = wordlength("Google");
console.log(`google has : ${value}`);
console.log(`---------------------------------------------------`);
