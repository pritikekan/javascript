console.log(`------------------Assignment------------------`);

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`1.Find out the 'TCS' employee details and og only name & company`);
array.forEach((Employee)=>{
    if(Employee.emp_company=="TCS"){
    console.log(`Employee Name:${Employee.emp_name},company:${Employee.emp_company}`);
    }
})
console.log(`-------------------------------------------------------------------------------------`);
console.log(`2.Find out the  employees with salary grater than or equal 50000`);
array.forEach((Employee)=>{
    if(Employee.emp_salary>=50000){
    console.log(`Employee ID:${Employee.emp_id},Employee Name:${Employee.emp_name},company:${Employee.emp_company}`);
    }
})
console.log(`-------------------------------------------------------------------------------------`);
console.log(`3.Find the sum of all employees with salary &log on console`);
let sum=0;
array.forEach((Employee)=>{
    sum=sum+Employee.emp_salary;
});
console.log(`The sum of all employees salary:${sum}`);
console.log(`-------------------------------------------------------------------------------------`);
console.log(`4.Find the average salary &log on console`);
let arrayLength=array.length
let avgsalary=sum/arrayLength;
avgsalary=avgsalary.toFixed(3)
console.log(`Avarage salary:${avgsalary}`);
console.log(`-------------------------------------------------------------------------------------`);
console.log(`5.Find the 'IT' OR'HR' department employees whose salary is greater than equal to 75000  &log  complete details on console`);
array.forEach((Employee)=>{
    if((Employee.emp_dept=="IT"||Employee.emp_dept=="HR")&&(Employee.emp_salary>=75000)){
console.log(`Employee ID:${Employee.emp_id},Employee Name:${Employee.emp_name},company:${Employee.emp_company},Dept:${Employee.emp_dept},salary:${Employee.emp_salary}`);
    }
})

