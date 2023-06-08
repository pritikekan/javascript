console.log("-------------for each() with arrow function and callback assignment-------");
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log("Given array:");
console.log(arrayNumbers);
console.log("1.log the array element with its  index using for each() with arrow function");
arrayNumbers.forEach((element,index)=>{
    console.log(`Element:${element},Index:${index}`);
});
console.log(`---------------------------------------------------------------------------------------`);
console.log("2.find the positive number");
arrayNumbers.forEach((element)=>{
    if(element>0){
    console.log(`Element:${element}`);
    }
});
console.log(`---------------------------------------------------------------------------------------`);
console.log("3.find the Negative numbers add into new array and log new array");
newarray=[];
arrayNumbers.forEach((element)=>{
    if(element<0){
        newarray.push(element)
    }
});
console.log(newarray);
console.log(`---------------------------------------------------------------------------------------`);
console.log("4.find the even numbersand log on console ");
arrayNumbers.forEach((element)=>{
    if(element%2==0){
    console.log(`Element:${element}`);
    }
});
console.log(`---------------------------------------------------------------------------------------`);
console.log("5.find the sum of all element from arraynumber anf log on console ");
let sum=0;
arrayNumbers.forEach((element)=>{
    sum=sum+element;
});
console.log(`sum of all element:${sum}`);
console.log(`---------------------------------------------------------------------------------------`);
console.log("6.log only even indexed  array value on console. for each()with arrow functin prefered ");
arrayNumbers.forEach((element,index)=>{
    if(index%2==0){
        console.log(`Element:${element},Index:${index}`);
    }
})

