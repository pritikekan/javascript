console.log(`---------------------------------------------------------`);
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`1.find the total lengthof element`);
let lengthOfArray=arrayNumbers.length;
console.log(`length of array is:"${lengthOfArray}"`);
console.log(`---------------------------------------------------------`);
console.log(`2.log the first element and last element in arraynumbers`);
const zerothzIndexValue=arrayNumbers[0];
console.log(`First element in array:"${zerothzIndexValue}"`);
console.log(`---------------------------------------------------------`);
let arrayLength=arrayNumbers.length;
 const lastElement=arrayNumbers[arrayLength-1];
 console.log(`Last element in array:"${lastElement}"`)
 console.log(`---------------------------------------------------------`);
 console.log(`3.log Third last element using length property`);
 const lastThirdElement=arrayNumbers[arrayLength-3];
 console.log(`last Third Element:"${lastThirdElement}"`);
 console.log(`---------------------------------------------------------`);
 console.log(`4.All even numbers----`); 
 for (const element of arrayNumbers) {
    if (element%2==0){
    console.log(`All even number:"${element}"`);
 }
 }
 console.log(`---------------------------------------------------------`);
 console.log(`5. odd numbers------`);
 for (const element of arrayNumbers) {
    if (element%2==1){
    console.log(` odd number:"${element}"`);
 }
 }
 console.log(`---------------------------------------------------------`);
 console.log(`6. Even position element and sum it`);
 let sumA=0;
 for (const index in arrayNumbers) {
    if (index%2==0) {
    sumA=sumA+arrayNumbers[index];
    }
    }
    console.log(`sum of  even array:${sumA}`);
    console.log(`---------------------------------------------------------`);
    console.log(`7. Odd position element and sum it`);
    let sumB=0;
    for (const index in arrayNumbers) {
        if (index%2==1) {
         sumB=sumB+arrayNumbers[index];
        }
        }
        console.log(`sum of odd array:"${sumB}"`);
        console.log(`---------------------------------------------------------`);
        console.log(`8. sum of all element in array`);
        console.log(`sum of all element:"${sumA+sumB}"`);
        console.log(`---------------------------------------------------------`);
        console.log(`9. find the number which multiple of 5`);
        for (const element of arrayNumbers) {
            if (element%5==0){
            console.log(`multiple of 5:"${element}"`);
         }
         }
         console.log(`---------------------------------------------------------`);
         console.log(`10.is number 115 available in arraynumber `);
         console.log(arrayNumbers.includes(115));
         console.log(`---------------------------------------------------------`);
         console.log(`11.is number 23 available in arraynumber `);
         console.log(arrayNumbers.includes(23));
         console.log(`---------------------------------------------------------`);
         console.log(`12.insert number 55,66 before index 3 `);
         arrayNumbers.splice(3,0,"55","66");
         console.log(arrayNumbers);
         console.log(`---------------------------------------------------------`);
         console.log(`13.delete 3 element starting from index 4 `);
        const deleteElement=arrayNumbers.splice(4,3);
        console.log(`delete 3 element starting from index 4:${arrayNumbers}`);