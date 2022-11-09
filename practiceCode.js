var person={
    Name: "Shital",
    age: "25",
    address:{
        city: "Pune",
        state: "MH",
    }

}
var object={...person};
//console.table(person);
//console.table(object);
console.log(object.address.city="Mumbai");
console.table(person);
console.table(object);

var object2=JSON.parse(JSON.stringify(person));
console.log(object2.address.city="Delhi");
console.table(person);
console.table(object2);