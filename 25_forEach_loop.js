let show = ()=>{
    console.log("h1");
}
show(10,"test");


//console.log("================================Traverse the array using forEach()============================================================");
const arrayNumbers =[10,20,30,40,20,10,30];
//arrayNumbers.forEach(function(currentValue,index,array){
//console.log(currentValue,index,array);

//});

console.log("================function convert into arrow function=====================");
arrayNumbers.forEach( (currentValue,index)=>{
    console.log(currentValue,index);
    
    });

console.log("==================Arrow function=code write in one line=================================== ");
arrayNumbers.forEach(( currentValue)=>console.log(currentValue));

console.log("========================Traversing set using forEach method()=============================");
const setOfNumbers = new Set(arrayNumbers);
setOfNumbers.forEach((value)=> {
console.log(value);
});

console.log("========================Traversing map using ForEach method======================================================");
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");

map.forEach((key,value)=> {
console.log(key,value);
});


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
map.forEach((key,value)=>{
console.log(key,value);
});

