var arrayOfNumbers =[1,3,7,8,9,3,7];
console.log(arrayOfNumbers);
arrayOfNumbers.push(99);
console.log(arrayOfNumbers);
arrayOfNumbers.push(88);
console.log(arrayOfNumbers);
arrayOfNumbers.pop();
console.log(arrayOfNumbers);
//==============================concat the array using spread operator=============================================
const array1 = [1,2,3];
const array2 = [5,6,7];
//const array3 = array1.concat(array2);
const array3 =[...array1, ...array2]
console.log(array3);
