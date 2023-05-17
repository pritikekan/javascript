console.log(`--------------------------------------------------------------------------------------------`);
console.log(`1.Write a normal function malemarriageEligibility() with 3 args and check the condiition.`);
console.log(`--------------------------------------------------------------------------------------------`);

function malemarriageEligibility(gender,age,boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage`: `Hey ${boyName} you are not eligible for marriage`;
     return result;
   
}
 var res= malemarriageEligibility("Male",25,"Bill Gates");
 console.log(`${res}`);
 var res= malemarriageEligibility("Male",17,"Steve Jobs");
 console.log(`${res}`);
 console.log(`-------------------------------------------------------------------------------------------------`);
 console.log(`2.Write a normal function femalemarriageEligibility() with 3 args and check the condiition.`);
 console.log(`-------------------------------------------------------------------------------------------------`);

 function femalemarriageEligibility(gender,age,girlName){
    var result = (gender=="FeMale" && age>=18) ? `Hey ${girlName} you are eligible for marriage`: `Hey ${girlName} you are not eligible for marriage`;
     return result;
   
}
 var res= femalemarriageEligibility("FeMale",16,"Jenifer");
 console.log(`${res}`);
 var res= femalemarriageEligibility("FeMale",27,"Malinda Gates");
 console.log(`${res}`);
 console.log(`-------------------------------------------------------------------------------------------------`);
