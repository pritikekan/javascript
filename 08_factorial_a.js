var factorialOfNum =function factorialOfNum(num){
    if (num==null||num==undefined||isNaN(num)) {
        console.log(`Invalid input ${num}`); 
        return;
    } 
let factorial=1;
for (let index = num; index >=1; index--) {//index=5
    factorial=factorial * index;  
}
console.log(`factorial of number ${num} :${factorial}`);
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);