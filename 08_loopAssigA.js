console.log(`.............Loop Assignment...............`);
console.log(`1. Total no of vowel------------------------`);
var word = "I am very good iT Developer";
// a e i o u == A E I O U
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); // 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        console.log(char);
        count++;
    }
    
}
console.log(`Count total vowels: ${count}`);
console.log("-----------------------------------------------------------------------------");
console.log(`2.Function to get sum of cube of number from 1 to 5------------------------`);
var sumOfCube=function(num){
    var sum=0;
for (let index = 1; index <=num; index++) {
 sum=sum+index*index*index;}
console.log( ` sum of cube of number is ${sum}`);
}
sumOfCube(5);



console.log(`3.function odd position------------------------`);
function oddPositionedChars(word){
    var str="";
    for (let index = 0; index < word.length; index++){
  var char= word.charAt(index);
    if(index%2!=0 && char!=" "){
      str= str+char;
    }
}
console.log(`${str}`);

}oddPositionedChars("Hard work always pays back");
oddPositionedChars ("Soon I will be Angular IT Champ")
