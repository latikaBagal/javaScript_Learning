let myName = "Mohit";
let abc = myName; //"Mohit"

let frdName = myName;
frdName = "Anil";
myName = "Sachin";
console.log(frdName,myName);

let Person = {
    name: "Mohit",
    age:  31,
    city: "Pune"
}
 let student = Person; //shallow copy
 student.city = "Mumbai";
 console.log(student.city);
 console.log(Person.city);