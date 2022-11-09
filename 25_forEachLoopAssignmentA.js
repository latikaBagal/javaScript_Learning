console.log("Q1.Log the array element with its index using forEach()with arrow function");
const array_numbers = [1,-7, 40,502,-77,91,0,108,89,-601];

array_numbers.forEach( (currentValue, index)=>{
    console.log(currentValue, index);
    
    });

     console.log("Q2.find the positive number and log on console");
      array_numbers.forEach( (currentValue, index)=>{
        if (currentValue>0) {
            console.log(currentValue, index);   
        }
        
        
        });


        console.log("Q3. find the negative numbers and log on console using arrow function");

        array_numbers.forEach( (currentValue, index)=>{
            if (currentValue<0) {
                console.log(currentValue, index);   
            }
            
            
            });

            console.log("Q6. log the only even positioned array value on console forEach() with arrow function prefered");
            array_numbers.forEach( (currentValue, index)=>{
                if (index%2==0 && currentValue>0) {
                    console.log(currentValue, index);   
                }
                
             });

             console.log("Q7.log the odd positioned array value on console if it is negative");
             array_numbers.forEach( (currentValue, index)=>{
                if (index%2!==0 && currentValue<0) {
                    console.log(currentValue, index);   
                }
                
             });

    