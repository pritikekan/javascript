 class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
 }
 const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
 const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
 const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
 const emp_sonali=new Employee(66,"Sonali","Finance", 45000,"Infy");
 const emp_monika=new Employee(77,"Monika","IT", 40000,"Wipro");
 const emp_viny=new Employee(88,"Vinayak","IT", 75000,"TCS");
 const emp_mahi=new Employee(99,"Mahesh","HR", 85000,"Infy");
console.log(`1.Find all the employees working in "TCS" and log only employee name and company name`); 
 const  array =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
for (const Employee of array) {
  if (Employee.emp_company =="TCS"){
    console.log(`Employee Name:"${Employee.emp_name}",Company Name:${Employee.emp_company}`);
  }   
}
console.log(`-------------------------------------------------------------------------------------------`);
console.log(`2.Find finance department employees  and log dept and employee name`);
for (const Employee of array) {
    if (Employee.emp_dept =="Finance"){
      console.log(`Employee Name:"${Employee.emp_name}",Department Name:${Employee.emp_dept}`);
    }   
  }
 console.log(`-------------------------------------------------------------------------------------------`);
 console.log(`3.Find  employees whoese name start with'R' and log complete employee details`);

 for (const Employee of array) {
    if (Employee.emp_name.startsWith("R")) {
      console.log(`Employee id:"${Employee.emp_id}",Employee Name:"${Employee.emp_name}",Department Name:"${Employee.emp_dept}"Employee salary:${Employee.emp_salary},Company:${Employee.emp_company}`);
    }   
  }
  console.log(`-------------------------------------------------------------------------------------------`);
  console.log(`4.Find  employees whoese salary is grater than 7500 and log  employee name,company,salary`);
  for (const Employee of array) {
    if (Employee.emp_salary>75000) {
      console.log(`Employee Name:"${Employee.emp_name}",Department Name:"${Employee.emp_dept}"Employee salary:${Employee.emp_salary},Company:${Employee.emp_company}`);
    }   
  }
  console.log(`-------------------------------------------------------------------------------------------`);
  console.log(`5.Find  employees whoese salary is grater than or equal to 50000 and  from IT dept log  employee details`);
  for (const Employee of array) {
    if (Employee.emp_salary>=50000 && Employee.emp_dept=="IT") {
        console.log(`Employee id:"${Employee.emp_id}",Employee Name:"${Employee.emp_name}",Department Name:"${Employee.emp_dept}"Employee salary:${Employee.emp_salary},Company:${Employee.emp_company}`);
    }   
  }
  console.log(`-------------------------------------------------------------------------------------------`);
  console.log(`6.Find out employees  from company 'INFY' and log complete employee details on console `);
  for (const Employee of array) {
    if (Employee.emp_company =="Infy"){
        console.log(`Employee id:"${Employee.emp_id}",Employee Name:"${Employee.emp_name}",Department Name:"${Employee.emp_dept}"Employee salary:${Employee.emp_salary},Company:${Employee.emp_company}`);
    }   
  }
  console.log(`-------------------------------------------------------------------------------------------`);
