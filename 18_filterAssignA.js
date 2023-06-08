const arrayNumber=[20,11,40,25,37,49,9,90,60,2,19]
const arrayGreaterThan50 = arrayNumber.filter( (element)=> {
    return element>50;
} );
console.log(`1.Number are greater than 50`);
console.log(arrayGreaterThan50);

console.log(`---------------------------------------------------------`);
console.log(`2.Even Number in array `);
const arrayEven = arrayNumber.filter( (element) => {
    return element%2==0;
} );console.log(arrayEven);
console.log(`---------------------------------------------------------`);
console.log(`2.ODD Number in array `);
const arrayOdd= arrayNumber.filter( (element) => {
    return element%2==1;
} );
console.log(arrayOdd);
console.log(`---------------------------------------------------------`);

console.log(`4.multiple of 5 num in array `);
const arraymultiple= arrayNumber.filter( (element) => {
    return element%5==0;
} );console.log(arraymultiple);
console.log(`---------------------------------------------------------`);

console.log(`5.number between  20 and 50 `);
const array=arrayNumber.filter((element)=>{
    return element>20 && element<=50;
})
console.log(array);