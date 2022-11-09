let arrayOfNumbers = [2,3,4,5];
arrayOfNumbers.push(3);
console.log(arrayOfNumbers);

console.log("=================Clear the element in array===================");
arrayOfNumbers.length=0;
console.log(arrayOfNumbers);
console.log("=================================================================");

let setOfNumbers = new Set();
console.log(typeof setOfNumbers);
console.log("====== Adding element into the set collection=======");
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);
console.log(setOfNumbers);

console.log("====== Adding duplicate element =======");
setOfNumbers.add(7);
console.log(setOfNumbers);

console.log("=========Checking number elements available into set====================================================");
console.log(setOfNumbers.size);
console.log("====================================================================================================");



console.log("====== Deleting element 9 =======");
setOfNumbers.delete(9);
console.log(setOfNumbers.size);
console.log(setOfNumbers);
console.log("================================================================");

console.log("====== Check whether element 7 available into set or not =======");
let isAvailable = setOfNumbers.has(7);
console.log(isAvailable);
console.log(setOfNumbers.has(9));

console.log("==================clear the set====================================================");
//setOfNumbers.clear();
//console.log(setOfNumbers);

console.log("====== Traversing set using for of loop==============================================================");
for (const element of setOfNumbers) {
    console.log(element);
}


console.log("=========================Remove duplicate value using spread operator====================================================");
let arrayNumbers =[2,3,4,5,6,3,5];
let arrayUniqueElements = [...new Set(arrayNumbers)];
console.log(arrayUniqueElements);



console.log("======================Remove duplicate element using for loop================================================================");
//let setNumbers = new Set();
//let arrayNumbers = [2,3,4,5,6,3,5];
//for (let index = 0; index < arrayNumbers.length; index++) {
   // const element = arrayNumbers[index];
   // setNumbers.add(element);
//}

console.log("=======================Merge two array using spread operator===================");
let array_numbers = [2,3,4,5,6,3,5];
let numbers = [45,67,88];
let result=     [...array_numbers,...numbers];//[2,3,4,5,6,3,5,45,67,88]
console.log(result);
//new Set (array_numbers)

console.log("=================Remove duplicate value using array convert into new set===========================================================");
let array = [2,3,4,5,6,3,5];
let setNumbers = new Set(array);
console.log(setNumbers);