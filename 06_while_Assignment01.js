console.log(`---------------whileAssignment------`);
console.log(`1.WAP to print numbers from 5 to 15 by incrementing 1`);
let i=5;
while (i<=15) {
    console.log(i); // 0  1 2
   i = i + 1;
}
console.log(`----------------------------------------------------`);
console.log(`2.WAP to print numbers from 50 to 40 `);
let j=50;
while (j>=40) {
    console.log(j); // 0  1 2
   j = j - 1;
}
console.log(`----------------------------------------------------`);
console.log(`3.WAP to find first 15 odd number `);
let k=0;
while (k<=15) {
    if(k%2==1){
        console.log(k);
    }
    k++;
}
console.log(`----------------------------------------------------`);
console.log(`4.WAP to find first 10 even number `);
let a=0;
while (a<=10) {
    if(a%2==0){
        console.log(a);
    }
    a++;
}
console.log(`----------------------------------------------------`);
console.log(`5.WAP to print table of 5 `);
let b=5;
while (b<=50) {
    if(b*2){
        console.log(b);
    }
  b=b+5; 
}
console.log(`----------------------------------------------------`);
console.log(`6.WAP to print table of 10 `);
let c=10;
while (c<=100) {
    if(c%2==0){
        console.log(c);
    }
  c=c+10;
}
console.log(`----------------------------------------------------`);
console.log(`7.WAP to print table of 10 reverse order`);
let d=100;
while (d>=10) {
    if(d%2==0){
        console.log(d);//
    }
 d=d-10;
}