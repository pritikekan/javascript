console.log("=================Assignment================");
let sbiBank={
bankName:"SBI",
branch:"Nashik",
accountNo:1245357672,
interestRate:"8.5%",
}
let bankLocation={
    street:"Nashik College road",
    landmark:" CBS bus stand",
    city:"Nashik",
    pin:422605,
}
console.log("1.create the object-bankSbi");
console.log(sbiBank);
console.log("-----------------------------------------------------");
console.log("2.create the object-bankLocation");
console.log(bankLocation);
console.log("-----------------------------------------------------");
console.log("3.clone the banksbi and banklocation ");
let sbiBankcloned={

}
let bankLocationcloned={
    
}
console.log("step1.banksbi object cloned to banksbicloned object");
Object.assign(sbiBankcloned, sbiBank);
console.log(sbiBankcloned);
console.log("---------------------------------------------------------------------------------------------");
console.log("step2.banklocation object cloned to banklocationcloned object");
Object.assign(bankLocationcloned, bankLocation);
console.log(bankLocationcloned);
console.log("-----------------------------------------------------------------------------------------");
console.log("4.create object rateOfinterest ");
let rateOfinterest={
    homeLoneInterest:"6%",
    personalLoneInterest:"7%",
    dueInterest:"7.5%"

}
console.log(rateOfinterest);
console.log("-----------------------------------------------------------------------------------------------");
console.log("5.merge step 1,step 2,step 4object into new object ");
let sbiDetils={

}
Object.assign(sbiDetils,sbiBank,bankLocation,rateOfinterest);
console.log(sbiDetils);
console.table(sbiDetils);
console.log("---------------------------------------------------------------------------------------------------------");
console.log("6.traversing object after merge");
for (const key in sbiDetils) {
    if (Object.hasOwnProperty.call(sbiDetils, key)) {
        const element = sbiDetils[key];
        console.log(`${key}:${element}`);   
    }
}

