let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log(arrayOfNumbers);
//arrayOfNumbers[4] = 11;
console.log(arrayOfNumbers);
console.log(arrayOfNumbers.includes (7));
console.log(arrayOfNumbers.includes (9));
  arrayOfNumbers.unshift(5,44);
   arrayOfNumbers.unshift(0,99,77,66);
   console.log(arrayOfNumbers);
   console.log("====================Shift Method()================================");
   arrayOfNumbers.shift();
   console.log(arrayOfNumbers);

   console.log("==================Shift()============================");
   let array = [11,22,47,81];
   console.log(array);
   array.shift();
   console.log(array);
   console.log("=========================Slice()===============================");
    let arrayNumbers = [1,3,7,8,9,3,7];
    let slicedElements = arrayNumbers.slice(2);
    console.log(slicedElements);
    let slicedValues= arrayNumbers.slice(4,6);
        console.log(slicedValues);
        console.log("===================Splice()======================================");
       let array_numbers = [1,3,7,8,9,3];
       console.log(array_numbers);
        // let splicedElements = array_numbers.splice(4); // It remove elements from 4th index to the end
       // let splicedElements = array_numbers.splice(2,3)// It removes the total 3 element starting from index 2
       // let splicedElements = array_numbers.splice(2,0,22)// Will insert element 22 before index 2, 0 - means don't replace
       //let splicedElements= array_numbers.splice(2,1,22)
       //console.log(splicedElements);
       //array_numbers.splice(2,2,22);
       array_numbers.splice(2,2,22,44)
       console.log(array_numbers);

      console.log("======================================================");
        // We use any one loop for traverse array for loop or for in loop
        for (let index = 0; index < arrayOfNumbers.length; index++) {
        const element = arrayOfNumbers[index];
        console.log(element);
        }
        console.log("==========================================================");
       //traverse array using for in loop 
     for (const index in arrayOfNumbers) {
     const element = arrayOfNumbers[index];
     console.log(element);
          
        }
        console.log("========================================================");
    // traverse array reverse order
     let totalElements = arrayOfNumbers.length-1;
    for (let index = totalElements; index >=0;  index--) {
       const element = arrayOfNumbers[index];
        console.log(element);
    }
    
    
    
    
    
    
    
    
    
    