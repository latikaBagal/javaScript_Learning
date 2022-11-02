let bank_sbi= {
 bank_name: "state bank of india",
 bank_branch: "pandharpur",
 ifsc_code: "SBIN0000446",
 state: "Maharashtra",
 district: "Solapur",
}
let bank_location= {
    street:"College Chowk Pandharpur",
    city: "pandharpur",
    pin_code: 413304,
}
 let rate_of_interest={
    home_loan_interest: "7%",
    personal_loan_interest: "12%",
    due_interest:"3%",
 }
console.log(bank_sbi);
console.log(bank_location);


console.log("===================Cloning using assign method of object class========================================================================= ");

let objectClone = Object.assign({}, bank_sbi,bank_location);
console.log(`${ Object.entries (objectClone)}`);
console.log("===============================cloning using(...spread)================================================================================");
let objectClone1={...bank_sbi, ...bank_location}
console.log(`${Object.entries(objectClone1)}`);
console.log("==============================Merge all object using(...spread)==========================================================================");
let sbi_details={...bank_sbi, ...bank_location, ...rate_of_interest}
console.log(`${ Object.entries (sbi_details)}`);
console.log("===============================Merge all object using assign method======================================================================");
let allObjectClone = Object.assign({}, bank_sbi,bank_location,rate_of_interest);
console.log(`${ Object.entries (allObjectClone)}`);
console.log("=======================================================================================================================================");
console.log("Traverse Merged Object using for of loop");
let array=[sbi_details]
for (const iterator of array) {
    console.log(`${ Object.entries (iterator)}`);
}