  console.log("Q:1 count the total number of vowels using include method " );

      var myString ="Good Morning IT Champ";
var vowels = "aeiou";
var vowelsLowerCase = "aeiou";
var vowelUpperCase = "AEIOU";
var vowelsCount=0;

for (let index = 0; index < myString.length; index++) {
   var char=  myString.charAt(index);
     var isLowerAvailable = vowelsLowerCase.includes(char);
     var  isUpperAvailable= vowelUpperCase.includes(char);
    
     if (isLowerAvailable ||isUpperAvailable) {
         vowelsCount = vowelsCount + 1;
     }

    }
   console.log(`Total vowels count:${vowelsCount}`);
    
      // console.log("=================================================================================");
      console.log(" count the total number of vowels using include method or using function");  

      var vowelsCount = function(myString){
          var vowels = "aeiou";
        var vowelsLowerCase = "aeiou";
        var vowelUpperCase = "AEIOU";
        var vowelsCount=0;
        
        for (let index = 0; index < myString.length; index++) {
           var char=  myString.charAt(index);
             var isLowerAvailable = vowelsLowerCase.includes(char);
             var  isUpperAvailable= vowelUpperCase.includes(char);
            
             if (isLowerAvailable ||isUpperAvailable) {
                 vowelsCount = vowelsCount + 1;
             }

            }
            console.log(`Total vowels count:${vowelsCount}`);
          }
       vowelsCount("Good Morning IT Champ");
       vowelsCount("I love javaScript");

      console.log("===============================================================================");
       // console.log("Q: 5 log the even position character and do not consider empty space");
       function evenPositionChars (myString) {
        for (let index = 0; index < myString.length; index++) {
           var chh= myString.charAt(index);
          if (index%2==0  && chh!=" ") {
          console.log(chh);
        }
    
        }
    

       }
       evenPositionChars("Hard work always pays back");