  

console.log("========================greatest Number============================");
var greater_number = function(num1,num2){
  var result =num1> num2 ? num1 :num2;
  console.log(result);
  }
  greater_number(10, -10)
  greater_number(800,899)

  var isEvenOrOdd = function (num1) {
    var result = num1%2==0 ? "even" : "odd";
    console.log( result);
   }
   isEvenOrOdd (29);
   isEvenOrOdd(44);
   isEvenOrOdd(0);
   isEvenOrOdd(101);
      
   
var even_odd = function(arg){
  var wordLength = arg.length;
  var result=wordLength%2==0 ? "even":"odd";
  console.log(`the length of string ${arg} is ${result}`);
}
even_odd("javascript");
even_odd("developer");
even_odd("google");

  
    
        var addition = function(num1,num2){
      // return num1+num2;
    var result=num1+num2;
  console.log(result);
   }
  //  var result=addition( 10,20);
  //  console.log(result);
  addition(10,20)