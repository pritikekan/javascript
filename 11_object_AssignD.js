console.log("=================Assignment================");
let professor={
    name: " vinit mishra",
    city: "Nashik",
    age: 52,
    gender:"male",
    isMarried: true,
    degrees:{
        engineering:'CSC',
        PHD:'Adv Computing',
        BCS:'physics',
    },

 certificate: ["Hacker Rank participation","Certificate in IFE course","Certificatebin Adv programming" ],
};
console.log(`1.professor----------`);
console.log(professor);
console.log(`2.degrees----------`);
console.log(professor.degrees);
console.log(`3. certificates----------`);
console.log(professor.degrees.certificate);
console.log(`4. concate all degrees----------`);
 function value(){
let concating= `Total degrees are:engineering:"${professor.degrees.engineering}",` + `PHD:"${professor.degrees.PHD}",` + `BCS:"${professor.degrees.BCS}",`
return concating;
// console.log(concating);
}
let result=value();
console.log(result);
console.log(` 5.Adding object properties----------`);
professor.totalExperience="14 years";
console.log(`Total Experience :${professor.totalExperience}`);
console.log(` 6.modify object properties----------`);
professor.city = "Mumbai";
console.log(`professor City is : ${professor.city}`);
console.log(`7.modify object properties----------`);
professor.certificate.push('Oracle Certified');
console.log(`Add one certificate:${professor.certificate}`);
console.log(`8.log last element of array----------`);
let arrayLength=professor.certificate.length;
 const lastElement=professor.certificate[arrayLength-1];
 console.log(`Last element:${lastElement}`);