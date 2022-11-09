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
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

console.log("Add all the created emp objects inside array namely as 'array employees'");
const arrayOfEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]
console.log("==============================================================================================");

console.log("Q1.find the all the employee working in 'TCS' and log only employee names and company name on console");
for (const employee of arrayOfEmployee) {
    if (employee.emp_company=="TCS") {
      console.log(`Employee Name: ${employee.emp_name}, Company Name: ${employee.emp_company}`);  

    }
    
}
console.log("============================================================================================");
console.log("Q2.Find the 'finance' department employees, log only department and employee name on console");
for (const employee of arrayOfEmployee) {
    if (employee.emp_dept=="Finance") {
        console.log(`Employee department: ${employee.emp_dept} Employee Name: ${employee.emp_name}`);
        
    }
    
}
console.log("===========================================================================================");
console.log("Q3.Employees whose name start with 'R' and complete employee detail on console ");
for (const employee of arrayOfEmployee) {
    if (employee.emp_name.startsWith("R") ) {
        console.log(`Employee name start With R:${employee.emp_name}`);
    }
    
}

console.log("============================================================================================");
console.log("Q4.Find the employees whose salary is grater than 70000");
for (const employee of arrayOfEmployee) {
    if (employee.emp_salary> 70000) {
        console.log(`Employee Name: ${employee.emp_name}, ${employee.emp_company}, ${employee.emp_salary}` );
        
    }
    
}
console.log("=====================================================================================");
console.log("Q5.Find the employees whose salary greater than or equal  50000 and from it department");
for (const employee of arrayOfEmployee) {
    if (employee.emp_salary>=50000 && employee.emp_dept=="IT") {
        console.log(`${employee.emp_id}, ${employee.emp_name},${employee.emp_dept},${employee.emp_salary}, ${employee.emp_company}`);
        
    }
    
}
console.log("================================================================================================");
console.log("Q6.Find out all the employees from company 'infy' and log complete details on console");
for (const employee of arrayOfEmployee) {
    if (employee.emp_company=="Infy") {
        console.log(`${employee.emp_id}, ${employee.emp_name},${employee.emp_dept},${employee.emp_salary}, ${employee.emp_company}`);
        
    }
    
}