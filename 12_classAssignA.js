console.log(" =====================class Assignment=============");
console.log("-------------------------------------------------------------------------------");
console.log("01.class for vehicle");
class Vehicle {
    constructor (brand,model,color,fuelType,mileage){
        this.brand=brand,
        this.model=model,
        this.color=color,
        this.fuelTyoe=fuelType,
        this.mileage=mileage
    }
    showDetails(){
        console.log(`vehicle details are- Brand:${this.brand},model:${this.model},color:${this.color},fuelType:${this.fuelType},mileage:${this.mileage}`);
    }

}
const tata = new Vehicle ("TATA","Nexon","Black","petrol","17kmpl");
const jaguar = new Vehicle("JAGUAR","British racing Green","white","petrol","20kmpl");
const BMW = new Vehicle ("BMW","BMW Z4","white","petrol","19kmpl");
const honda = new Vehicle ("HODA","hondacity","black","petrol","18kmpl");
const kia = new Vehicle ("KIA","seltos","red","petrol","20kmpl");
const array = [tata,jaguar,BMW,honda,kia]
for (const element of array) {
    element.showDetails();
   
}
console.log(`-------------------------------------------------------------------`);
console.log(`2.class for college`);
class College{
    constructor(collegeName,location,city,pin){
        this.collegeName=collegeName,
        this.location=location,
        this.city=city,
        this.pin=pin
    }
}
const vjti=new College("VJTI","Matunga Road","pune",4000019);
const Mit=new College("MIT","Nashik Road","Nashik",421015);
const mgclg=new College("M.G.Collge"," near Ramkund","Nashik",421015);
const coep=new College("COEP","Shivajinagar","pune",4000019);
function transverseObject(collegeObject){
    for (const key in collegeObject) {
        if (Object.hasOwnProperty.call(collegeObject, key)) {
            const element = collegeObject[key];
            console.log(`${key}:${element}`);
            
        }
    }
}
transverseObject(vjti);
console.log("----------------------------------------------------------");
transverseObject(Mit);
console.log("----------------------------------------------------------");
transverseObject(mgclg);
console.log("----------------------------------------------------------");
transverseObject(coep);
console.log("----------------------------------------------------------");
