console.warn("------Q.no.4 Create the employee _info Object----------------------------------------------------");
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202"
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
    },
 mobiles: ["+91 8600 3456 88","1800-4567 32","+91-9096 5678 77"]
}
//console.table(employee_info);

//console.warn("----------------------Q.no.7----------employee info program deep cloning using JSON.stringify() method---------------------");
//let clone_emp_info2 =JSON.parse(JSON.stringify(employee_info));
//employee_info.salary.july_month = "80k";
//employee_info.address.country = "United Kingdom";
//console.warn(`Q.7.a----------Original and clone object salary-------------------------`);
//console.log(`Employee original salary in main object==>`,clone_emp_info2.salary.july_month);
//console.log(`Employee salary in clone object==>`,employee_info.salary.july_month);
//console.warn("-------------Q.no.7a--------Original and clone object Country---------------------");
//console.log(`Employee original country value==>`,clone_emp_info2.address.country);
//console.log(`Employee clone country value==>`,employee_info.address.country);

clone_emp_info = JSON.parse(JSON.stringify(employee_info));
console.log(employee_info.salary.july_month="80000");
console.log(employee_info.address.country= "united Kingdom");
console.table(employee_info);
console.table(clone_emp_info);