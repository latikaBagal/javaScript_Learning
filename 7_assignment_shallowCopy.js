console.warn("-----------Q.no.1----------Shallow cloning-------------------");
const array_nums =[20,3,4,56,90,400,49];
console.log(`Given array is ==>`, array_nums);
const array_nums2 = array_nums ;
array_nums2.push(55,66);
console.log(`main array after clone ==>${array_nums2}`);

console.log("----------Q.no.2--------------perform deep clone using spread operator-------------------");
const array_num3 =[...array_nums];
array_nums.push(10,25);
console.log(`Update original array with values 10,25 ==>${array_nums}`);
console.log(`Deep clone array after main array update ==>${array_num3}`);

console.warn("---------Q.no.3----Merge or concat array with using spread operator-----------------------------");
let array_even = [2,30,14,8];
console.log(`Given other array ==>`,array_even);
const array_merge = [...array_nums,...array_even];
console.log(`After merge or concat of array-nums and array_even ==>${array_merge}`);

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

console.warn("----------Q.no.5 log the employee details on console------------------------------");
console.warn("----------------------------------a---I am login employee address details-------------------------------------------");
console.table(employee_info.address);
console.warn("---------------------------------b--------------------------------------------");
console.log(`Employee mobile number is ==>`,employee_info.mobiles);

console.warn("----------------Q.no.6---Perform the deep clone using ... operator----------------");
let clone_emp_info = {...employee_info}
//console.table(employee_info);
//console.table(clone_emp_info);
employee_info.address.locality.street = `At.Nanded Di. 431602`;
employee_info.mobiles[0]=`8668747445`;
console.table(employee_info);
console.table(clone_emp_info);
console.log(`... Due to limitations of spread operator`);
// deep clone mdhe fkt clone mdhech changes vayla pahije hote pn ithe donhimdhe pn zalet
