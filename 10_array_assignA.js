const arrayFruits =["Banana","Orange","Apple","Mango","Water Melon"];
console.log("1.first and last element on console");
const zerothzIndexValue=arrayFruits[0];
console.log(`first element:${zerothzIndexValue}`);
const fourthIndexValue=arrayFruits[0];
console.log(`last element:${fourthIndexValue}`);

console.log("2.Add element papaya");
arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log("3.Remove  mango element from array ");
let splice=arrayFruits.splice(arrayFruits.length-2,1);
console.log(arrayFruits);
console.log("4.Add pineapple at last possition ");
arrayFruits.push('pineapple');
 console.log(arrayFruits);
 console.log("5.'Dragon fruit'before 'water melon'");
 arrayFruits.splice(4,0,'Dragon Fruit');
 console.log(arrayFruits);
 console.log("6.Replace element orange with kiwi");
arrayFruits.splice(2,1,"Kiwi");
console.log(arrayFruits);
console.log("7.log the element starting from index 1 to 4");
const arrFruits=arrayFruits.slice(1,5)
 console.log(arrFruits);
 console.log("8.only select last three element");
 console.log(arrayFruits.slice(arrayFruits.length-3));
