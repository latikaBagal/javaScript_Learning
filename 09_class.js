class Person{
   // fullName
   // city
   // age
   // gender
    constructor(fullName,city,age,gender){
        this.fullName = fullName;
        this.city = city;
        this.age = age;
        this.gender = gender;

    }
    details(){
        console.log(`Person Details: ${ this.fullName} ${ this.city} ${this.age} ${ this.gender} `); //Object detail return
    }
}
let Sachin = new Person("sachin Tendulkar","pune",45,"Male");
let rohit = new Person("Rohit Sharma","Mumbai", 32,"Male");

Sachin.details(); //Access Method

console.log(typeof Sachin);
console.log(rohit);



class Student{
   constructor(rollNo,SchoolName) {
    this.rollNo = rollNo;
    this.SchoolName = SchoolName;

   }
}
let s1 = new Student(123,"ABC");
let s2 = new Student(345,"PQR");

console.log(s1 instanceof Student);
console.log(Sachin instanceof Student);

console.log(s1.rollNo,s1.SchoolName); // Access Object Property
s1.rollNo = 567; //update
console.log(s1);
delete s1.rollNo //delete
console.log(s1);


