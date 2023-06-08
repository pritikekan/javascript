console.log(`=============Assignment===============`);
console.log(`1.with no arg and no return value`);
let display = ()=> {
    console.log(`"Good Morning,Today is Monday"`);
}
display();
console.log(`---------------------------------------------------------------`);
console.log(`1.with 3 arg and no return value`);
let multiplication = (n1,n2,n3=1) => {
    let result=n1*n2*n3;
    console.log(`multiplication of number 5,5,2 :"${result}"`);
    
}
multiplication(5,5,2);
multiplication(10,4);
console.log(`---------------------------------------------------------------`);
console.log(`Arrow function with 5 arguments and return value`);
console.log(`1.Values to be passed=>100,100,200,349,756`);
let add = (num1, num2,num3,num4,num5) => {
    let result = num1 + num2 + num3 +num4 +num5;
    return result;
}
 result = add(100, 100,200,349,756);
console.log(`Addition of number is:" ${result}"`);
console.log(`2.Invoke same arrow function "I am "," learning "," ES6 "," features "," in depth "`);
result= add("I am "," learning "," ES6 "," features "," in depth ");
console.log(`concat of given words:" ${result}"`);