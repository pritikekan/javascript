console.log(`------------Assignment2.-------------`);
console.log(`1.-------------------------------------------`);
function stringHandsOn(){
var givenString = "   Hey you are doing good, keep it up  "
console.log(`Given string:${givenString}`);console.log(`2.-------------------------------------------`);
var greet = givenString.length;

console.log(`length:${greet}`);
console.log(`3.-------------------------------------------`);

var trimmedgreet= givenString.trim();
var lengthAfterTrim = trimmedgreet.length;
console.log(`After remove leading and trailling extra spaces and length:${trimmedgreet}, ${ lengthAfterTrim}`);
console.log(`4.-------------------------------------------`);
 var greetlength = greet.length;
 var extraSpace="greetLength-lengthAfterTrim";
 console.log(`extra space:${extraSpace}`);
console.log(`5.-------------------------------------------`);
var firstCharacter =trimmedgreet.charAt(0);
var lastCharacter =trimmedgreet.charAt(lengthAfterTrim-1);
console.log(`first charcter:${firstCharacter},second character:${lastCharacter}`);
console.log(`6.--------------------------------------------------------------------`);
var resultSplit =trimmedgreet.split(" ");
var wordlength= resultSplit.length;
console.log(`Total number of words:${wordlength}`);
console.log(`7.--------------------------------------------------------------------`);
var indexOfGood = givenString.indexOf("good");
console.log(`index of good :${indexOfGood}`);
console.log(`8 .--------------------------------------------------------------------`);
var sliceResult =givenString.slice("22");
console.log(`Slice Result is:${ sliceResult}`);
console.log(`--------------------------------------------------------------------`);
var subStringResult = givenString.substring(22);
console.log(`Substring result is:${subStringResult}`);
console.log(`9.--------------------------------------------------------------------`);
var result = trimmedgreet.endsWith("up");
console.log(` Is ${trimmedgreet} ends with character "up" : ${result}`);
console.log(`10--------------------------------------------------------------------`);
var result = trimmedgreet.startsWith ("Hey");
console.log(` Is ${trimmedgreet} start with character "Hey" : ${result}`);

}

stringHandsOn();
