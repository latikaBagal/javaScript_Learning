let variable_name = "";
let objectperson = {
     fullName: "Sachin Tendulkar",
      age: "42",
    isMarried: true,
   
    address: {
      street: "As ClUB",
      pin_code: 123456,
      city: "Pune",
      state: "MH",
      
  
     },
//  Add Method/property as value assigne  function
eat:function(){
console.log("I Am vegeterian");
},
walk:function(){
  console.log("I do walk everyday");
},
 details: function(){
console.log (this.fullName);
 }
  
  
 }
 objectperson.details();
 console.log(objectperson.fullName);
  
 console.log(typeof objectperson);
  console.log(objectperson.address);
 console.log( objectperson.address.street);
 objectperson.address.landmark="Near Main Road"; //property add
 objectperson.eat();
 objectperson.fullName = "Sachin Ramesh Tendulkar"; // Update Property
 objectperson.pinCode = 123456; // Add property
    delete objectperson.age;   // delete property
  objectperson.profession = "Angular Developer";
  console.log ( objectperson);
 
 //objectperson["age"]
//console.log(objectperson["age"]); // second way access property
console.log(objectperson);
 let personfullName =objectperson.fullName;
console.log(personfullName);
console.log(objectperson.fullName);
let city=objectperson.city;
console.log(objectperson.city);

console.log("========================in operator=======================================");
let isAvailable="fullName" in mohitPerson;
console.log(isAvailable);
console.log("city" in mohitPerson);
console.log("==========================================================================");
// empty object
let collegeAbc={

}
console.log(collegeAbc);
