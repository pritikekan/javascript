const array = [10, 5,'a', 'b','h', 11 ];
console.log(`Given Array:`);
console.log(array);
var stringArray=[];
var numberArray=[];

array.forEach(element=>{
if(typeof(element)==="string"){
    stringArray.push(element)
    }
  
    if(typeof(element)==="number"){
        numberArray.push(element)
        numberArray.sort( (n1, n2) => {
            return n1 > n2 ? 1 : -1 ;
         } );
        }
       
});
console.log(`Sorted Number:`);
console.log(numberArray);
console.log(`Sorted Alphabets:`);
console.log(stringArray);


