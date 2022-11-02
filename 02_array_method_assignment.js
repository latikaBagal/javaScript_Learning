console.log("Given Array");
const array_numbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(array_numbers);

const totalLength = array_numbers.length;
console.log("Total length of array:");
console.log(totalLength);
console.log("=====================================================================");
console.log("2.Log the first and last element in array_numbers and log on console");
const first_ele=array_numbers[0];
console.log(`First element: ${first_ele}`);

const last_ele=array_numbers[10];
console.log(`Last element: ${last_ele}`);
console.log("========================================================");

console.log("3 Log the third last element using length property and log on console");
let last=array_numbers[array_numbers.length-3];
console.log(last);
console.log("=======================================================================");
console.log("4. find all even numbers and log on console");
var res ="";
for(let index=0;index<array_numbers.length;index++){
    if(array_numbers[index]%2==0)
    {
        res = res + " " +
        array_numbers[index]
    }

}console.log(res);
console.log("========================================================");

console.log("5.find the odd number and log on console");
var re = " ";
 for(let index=0;index<array_numbers.length;index++){
 if(array_numbers[index]%2!==0)
 {
    re = re + " " +
    array_numbers[index]
 }
}console.log(re);
console.log("===================================================");
console.log("6. find all even positioned element from array_numbers for loop");
var result = " ";
for(let index=0;index<array_numbers.length;index++){
    if([index]%2==0)
    {
        result = result + " " +
        array_numbers[index]
    }
}console.log(result);
console.log("=======================================================");
console.log("7.find all odd positioned element from array_numbers for loop");
var rm = " ";
for(let index=0;index<array_numbers.length;index++){
    if([index]%2!==0)
    {
        rm = rm + " " +
        array_numbers[index]
    }
}console.log(rm);
console.log("=======================================================");
console.log("8. find the sum of all elements from array_numbers,log on console");
var sum = 0;
for(let index=0;index<array_numbers.length;index++){
    sum = sum +
    array_numbers[index]
}
console.log(sum);
console.log("================================================================");
console.log("9.find number which are multiple of 5");
for(let index=0;index<array_numbers.length;index++){
    if(array_numbers[index]%5==0)
    {
       console.log(array_numbers[index]); 
    }
}
console.log("==================================================================");
console.log("10.is number 115 available in array_number");
console.log(array_numbers.includes(115));
console.log("=================================================================");
console.log("11. is number 23 available in array_numbers");
console.log(array_numbers.includes(23));
console.log("=================================================================");