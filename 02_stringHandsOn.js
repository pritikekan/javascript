console.log("------------Assignment2.-------------");
console.log("1.-------------------------------------------");
function stringHandsOn(){
console.log("Hey you are doing good,keep it up");
}
stringHandsOn();
console.log("2.-------------------------------------------");
var greet = "Hey you are doing good,keep it up";
greetLength=greet.length;
console.log("Total  string length:",greet.length);
console.log("3.-------------------------------------------");
var greet ="      Hey you are doing good,keep it up   ";
var trimmedgreet= greet.trim();
var lengthAfterTrim = trimmedgreet.length;
console.log("After remove leading and trailling extra spaces and length:",trimmedgreet,trimmedgreet.length);
console.log("4.-------------------------------------------");
 var greetlength = greet.length;
 console.log("before trimmed:",greetlength);
 console.log("Total extra spaces:",greetlength-lengthAfterTrim);
console.log("5.-------------------------------------------");
var firstCharacter =trimmedgreet.charAt(0);
var lastCharacter =trimmedgreet.charAt(lengthAfterTrim-1);
console.log("first charcter:",firstCharacter ,   "Last character:",lastCharacter);
console.log("--------------------------------------------------------------------");