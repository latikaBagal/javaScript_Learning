
//Second  Way to Create Object using constructor function
function Person(fullName,city,age,gender){
    this.fullName = fullName;
    this.city = city;
    this.age = age;
    this.gender = gender;
}
let sham = new Person("Sachin Tendulkar","Surat",45,"Male");
let sumit = new Person("Rohit Shrma","Pune",32,"Male");
let riya = new Person("Riya","Kolhapur",22,"Female");
let Sona = new Person("Sona","Mumbai",19,"Female");
console.log(sham);
console.log(sumit.age);//access property

Person.prototype.country = "India";  // Property Access to all object
console.log(sumit.country);
console.log(riya.country);