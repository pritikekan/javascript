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
 const  arrayEmps =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`1.All the employee fromwipro company`);
 const arrayWiproEmployees = arrayEmps.filter( (Employee) => {
    return Employee.emp_company == "Wipro";
} );
const arrayWiproEmployeeNames = arrayWiproEmployees.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayWiproEmployeeNames);
console.log(`--------------------------------------------------------------------`);
console.log(`2.All the employee from IT or HR company`);
const arrayEmployees = arrayEmps.filter( (Employee) => {
    return Employee.emp_dept == "IT" ||Employee.emp_dept == "HR";
} );
const arrayWiproEmployeeName = arrayEmployees.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayWiproEmployeeName);

console.log(`--------------------------------------------------------------------`);
console.log(`3.list the  employee whoese Id greaterthan 50`);
const arrayEmp = arrayEmps.filter( (Employee) => {
    return Employee.emp_id >50 ;
} );
const arrayEmployeeName = arrayEmp.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayEmployeeName);
console.log(`--------------------------------------------------------------------`);
console.log(`4.list the all  employees whoese name start with 'A' or 'V' or 'M'`);
const array = arrayEmps.filter( (Employee) => {
    return Employee.emp_name.startsWith("A")||Employee.emp_name.startsWith("V")||Employee.emp_name.startsWith("M");
} );
const arrayEmployeeNames = array.map( (employee) => {
    return employee.emp_name;
});
console.log(arrayEmployeeNames);
console.log(`--------------------------------------------------------------------`);
console.log(`5. The average salary of the employee for all dept`);
const empSalaries = arrayEmps.map( (Employee) => {
    return Employee.emp_salary;
});
const sulSalary =empSalaries.reduce( (runningTotal, value) => {
    return runningTotal+value;
});
const avg=sulSalary/arrayEmps.length;
console.log(avg);
console.log(`--------------------------------------------------------------------`);
console.log(`6. The average salary of the employee for IT dept`);
const arrayEmployee = arrayEmps.filter( (Employee) => {
    return Employee.emp_dept == "IT";
});
const emp_salary = arrayEmployee.map( (Employee) => {
    return Employee.emp_salary;})
const sumSalary =emp_salary.reduce( (runningTotal, value) => {
    return runningTotal+value;
});
const avgerage=sumSalary/arrayEmployee.length;
console.log(avgerage);