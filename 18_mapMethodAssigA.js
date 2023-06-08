console.log(`=================Assignment==================`);
const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log("1. Add 10 in each element ");
const arrayTrans = arrayNumbers.map( (element) => {
    return element+10;
} );
console.log(arrayTrans);
console.log(`-----------------------------------------------------`);
console.log("2. square of each element ");
const arraynum = arrayNumbers.map( (element) => {
    return element*element;
} );
console.log(arraynum);
console.log(`-----------------------------------------------------`);
console.log("3. Add index value its corresponding each array ");
const array= arrayNumbers.map( (element,index) => {
    return element+index;
} );
console.log(array);