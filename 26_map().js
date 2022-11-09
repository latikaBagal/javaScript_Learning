
console.log("===========Add 5 value in all array element using map()============================= ");
const arrayOfNumbers = [2,3,5,4,6,1];
const newArray = arrayOfNumbers.map((element)=>{

    return element + 5;
});

console.log(newArray);
console.log(arrayOfNumbers);

console.log("========Add 5 value only in three element using map===============================");
const addElement = arrayOfNumbers.map((element,index)=>{
    if (index<=2) {
        return element + 5;    
   }
   
return element;

});

console.log(addElement);
console.log(arrayOfNumbers);