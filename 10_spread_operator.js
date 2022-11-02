let person = {
    name: "Mohit",
    age: 31,
    city: "Pune",
    address:{
      pin: 431202,
      street: "kanch pokali"  
    }
}
console.log(typeof "10");
console.log("===============================================================");
console.log(person.name,person.age,person.city);
console.log(person);
//let student= {...person};

let student= JSON.parse(JSON.stringify(person)); // "10"

student.city = "Mumbai";
person.age = 33;
console.log(student.city,person.city);
console.log(student.age,person.age);

student.address.street = "khav Galli";
console.log(student.address.street);
console.log(person.address.street);

console.table(person);
console.table(student);
