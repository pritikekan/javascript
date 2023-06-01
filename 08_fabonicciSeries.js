console.log("=================Fabonicci series==================");
let n1=0;
let n2=1;
let nextTerm=n1+n2;
console.log(n1);
console.log(n2);
function Fabonicci(num) {
    for (let index = 0; index < num; index++) {
     nextTerm=n1+n2;
     n1=n2;
     n2=nextTerm;
     console.log(nextTerm);
        
    }
    
}
Fabonicci(10);