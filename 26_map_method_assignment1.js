
console.log("Q1. Add 10 into each element and log new array result on console using map()");
const array_numbers =[20,11,40,25,23,11,9,31,60,2,19];
const newArray = array_numbers.map((element)=>{

    return element + 10;
});

console.log(newArray);
console.log(array_numbers);

console.log("Q2. Square the each array element and log on console");

const squreElement = array_numbers.map((element)=>{

    return element*element
});

console.log(squreElement);
console.log(array_numbers);