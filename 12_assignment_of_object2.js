
console.warn("========================Assignment on array of object======================");
class Bank  {

constructor(bank_name,location,account_no,ifscCode,interest_rate){
 this.bank_name = bank_name,
 this.location = location,
 this.account_no = account_no,
 this.ifscCode=ifscCode,
 this.interest_rate = interest_rate

}

}
console.log("All bank details are:-");

let axis_bank = new Bank("Axis Bank","Pune","1122334455","AXIS0002233","12%");
console.log(axis_bank);

let sbi_bank = new Bank("State Bank Of Indid","Mumbai","9988774455","SBIN0007156","13%");
console.log(sbi_bank);

let icici_bank = new Bank("ICICI Bank","Nagapur","8855220033","ICIC0002288","11.5%");
console.log(icici_bank);

let kotak_bank = new Bank("Mahindra Kotak Bank","Solapur","778899665544","MHK021365","14%");
console.log(kotak_bank);

let hdfc_bank = new Bank("HDFC Bank","sangali","5566448899","HDFC229988","12.5%");
console.log(hdfc_bank);

let panjab_bank = new Bank("Panjab National Bank","Satara","3355669988","PANJ993322","10%");
console.log(panjab_bank);

let allBank = [axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,panjab_bank] //Converting Object into array
//console.log(allBank);

console.warn("Q.3 Bank Name & Bank Location==================================================");
for (let index = 0; index < allBank.length; index++) {
    const element = allBank[index];
    console.log(`1.Bank Name:${element.bank_name},       2. Bank Location: ${element.location}`);

}

console.warn("Q.4 Find the Object Kotak Bank Using For loop================================================");
for (let index = 0; index < allBank.length; index++) {
    const element = allBank[index];
    if (element==kotak_bank) {
        console.log(element);
        
    }
    
}

console.warn("Q.5.All bank Details using for of loop=========================================================");
//for (let index = 0; index < allBank.length; index++) {
  //  const element = allBank[index];
  //  console.log(element.bank_name,element.location,element.account_no,element.ifscCode,element.interest_rate);
    
//}

for (const element of allBank) {
    console.log(element);
}
    
