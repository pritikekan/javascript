//1 to 10
for (let index = 0; index <=10; index++) {
    console.log(`${index}`);
    if (index==5) {
        break;
    }
}
console.log(`End loop`);



var Iteration=0;
for (let index = 0; index <=10; index++) {
    Iteration =Iteration +1;
    console.log(`Iteration start :${Iteration}`);
    console.log(`${index}`);
   //index==5
   if (index==5) {
    continue;
   }
   console.log(`Iteration end :${Iteration}`);
}
console.log(`End loop`);