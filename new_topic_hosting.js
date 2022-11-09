
 console.log(myName);

   var  myName = "Mohit Sharma";


  // console.log(rollNo); //not allowed to access as variable declared using let doesn't hosting
  // let rollNo = 1234;

 // console.log(pin_code); // not allowed to access as variable declared using const doesn't hosting
  // const pin_code = 431202

   Show();
    function Show(){
        console.log("Show Function");
    }

     //display();// not allowed
    
     var display = function(){
        console.log("Inside display function expression");
    }
      display();
   