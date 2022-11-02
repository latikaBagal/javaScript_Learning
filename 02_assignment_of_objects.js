class Bank  {

constructor(bank_name,location,account_no,ifsc,interest_rate){
 this.bank_name = bank_name,
 this.location = location,
 this.account_no = account_no,
 this.ifsc=ifsc,
 this.interest_rate = interest_rate

}

}
let axis_bank = new Bank("Axis Bank","pune",1000002453,12345,"7% p.a");
let sbi_bank = new Bank("SBI Bank","Mumbai",1000002678,46789,"8% p.a");
let icic_bank = new Bank("ICIC Bank","Sangali",1000007890,34567,"8% p.a");
let kotak_bank = new Bank("kotak Bank","kolahapur",1000002908,35678,"10% p.a");
let hdfc_bank = new Bank("HDFC Bank","Satara",1000002653,56799,"4% p.a");
let panjab_bank = new Bank("Panjab Bank","Sangola",1000002213,56777,"9% p.a");

console.log("==================================================================================================");
console.log("C.Add all object elements in a array and just log on console-Bank name and Location");

const array = [axis_bank, sbi_bank, icic_bank, kotak_bank ,hdfc_bank, panjab_bank]
    

for (let index = 0; index < array.length; index++) {
    const element = array[index];
   console.log(`${element.Bank_name} :${element.location}`); 
}
console.log("=====================================================================================================");
console.log("D. from the array (step A)find the object which has name -> kotak bank using for of loop");
for (const bank of array) {
   if(bank.bank_name=="kotak Bank") 
   {
    console.log(bank);
   }
}
console.log("================================================================================================");
console.log("E. log the details on console using for of loop");
for (const bank of array) {
   console.log(bank);
}