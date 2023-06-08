console.log("============Assignment=============");
const arrayNum =[20,3,4,56,90,400,49]
console.log("1.performing shallow clone");
const clonedArray = arrayNum;
clonedArray.push(55,66);
console.log(`original Array:${arrayNum}`);
console.log(`clonned Array:${clonedArray}`);
console.log("------------------------------------------------------------------------------------------------");
console.log("2.performing  deep clone");
const clonnedArray = [...arrayNum];
clonnedArray.push(10,25)
console.log(`original Array:${arrayNum}`);
console.log(`clonned Array:${clonnedArray}`);
console.log("------------------------------------------------------------------------------------------------");
console.log("3.merge and concating array");
const array=[2,30,14,8]
var result =array.concat(arrayNum)
console.log(`concated array"${result}`);
console.log("------------------------------------------------------------------------------------------------");
console.log("4.Create object employee info");
const employee_Info={
    emp_id:27,
    emp_name:"John Doe",
salary:{
    july_month:"40,000INR",
    aug_month:"50,000INR",
   jun_month:"65,000INR"
},
address:{
    locality:{
        colony:"OM Vrindavan Society",
        street:"kanch pokli ,431202",
    },
city:"mumbai",
state:"Maharashtra",
country:"India"
     },
     moblies:["+91 8600 3456 88","1800-4567 32","+91-9096 5678 77"]
}
console.log(employee_Info);
console.log("------------------------------------------------------------------------------------------------");
console.log("5.log the employee details");
console.log("a.Address");
console.table(employee_Info.address);
console.log("a.Mobile Number");
console.log(employee_Info.moblies);
console.log("------------------------------------------------------------------------------------------------");
console.log("6.perform deep copy using JSON.stringify()");
console.log("a.update property 'july_month salary to 80k on cloned object");
console.log(`origional salary:${employee_Info.salary.july_month}`);
const deepClonedemployee_Info = JSON.parse(JSON.stringify(employee_Info));
// console.log(`origional salary:${employee_Info.salary.july_month}`);
deepClonedemployee_Info.salary.july_month="80,000INR",
 console.log(`updated salary:${deepClonedemployee_Info.salary.july_month}`);
 console.log("b.update property 'country to united kingdom on original object");
 console.log(`origional country:"${employee_Info.address.country}"`);
 const deepClonnedemployee_Info = JSON.parse(JSON.stringify(employee_Info));
deepClonnedemployee_Info.address.country="United Kingdom",
console.log(`c.updated country:"${deepClonnedemployee_Info.address.country}"`);


