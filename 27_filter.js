
console.log("========================Filter Method=============================================");
const arrayOfNumbers = [2,3,5,4,6,1]
let newArray = arrayOfNumbers.filter((element)=>{

    return element >= 4;

});
console.log(newArray);

console.log("======================reduce method===========================================");
let sum = arrayOfNumbers.reduce((value,runingTotal)=>{
    return value + runingTotal;


}, 100);
console.log(sum);

console.log("================================================================================");
class Person{
    constructor(fullName,city,age,gender){
     this.fullName = fullName;
     this.city = city;
     this.age = age;
     this.gender = gender;

 }
 details(){
     console.log(`Person Details: ${ this.fullName} ${ this.city} ${this.age} ${ this.gender} `); 
 }
}
let personAnil = new Person("Anil Mohite","Pune",31,"Male");
let personAnita = new Person("Anita Golate","Mumbai",22,"Female");
let personBill = new Person("Billgates","USA",67,"Male")

const array = [personAnil,personAnita,personBill];

for (let index = 0; index < array.length; index++) {
const element = array[index];
if(element.age>=50){
console.log(` ${element.fullName} ${element.city } ${element.age} ${element.gender}`);
}
}
 