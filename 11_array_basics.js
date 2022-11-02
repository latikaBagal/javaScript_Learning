var arrayOfNumbers=[1,3,7,8,9,3,7];
console.log(arrayOfNumbers);
var arrayLength = arrayOfNumbers.length;
console.log(`Total number elements available in array ${arrayLength}`);
var element = arrayOfNumbers[4];
console.log(`Element at 4th Index is:${arrayOfNumbers[4]}`);

console.log("====================Update value===================================");
arrayOfNumbers[2]=77;
console.log(arrayOfNumbers);

//let otherArray = arrayOfNumbers; //shallow copy
let otherArray = [...arrayOfNumbers];
arrayOfNumbers[3] = 44;
console.table(arrayOfNumbers);
console.table(otherArray);



//var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
//console.log("========== Resize array========");
//console.log(arrayOfNumbers.length);
//arrayOfNumbers.length = 3;
//console.log(arrayOfNumbers.length);
//console.log(arrayOfNumbers);
//console.log("========== 

