  // function with return value
  function manali (money) {
    console.log(money);
console.log("please go in market with Rs.:",money);
console.log("Buy some vegetables");
return "Vegetables bag";
}
   var veg= manali(500);
console.log(veg);

//  function with multipal argument
 function functionName(city, street, age, is_married){
console.log(city, street, age, is_married);

  return city+ street+age+is_married;
}
   var value= functionName("pune","khawgalli",22);
   console.log(value);

  //  swap value using function
  function swap_values(arg1 ,arg2){
    console.log("====================Before swap==============================");
  console.log(arg1,arg2);
  var temp =arg1;
  arg1=arg2;
  arg2=temp;
  console.log("====================After swap====================================")
  console.log(arg1,arg2);
  }
  swap_values ("virat","Anushka");
  swap_values("mango","Apple");
  swap_values(100,300);

  console.log("======================Addition function==================================");
  function addition(arg1,arg2,arg3) {
    console.log(arg1+arg2+arg3);
  }
  addition(200,300,600);
  addition("Latika","Gorakh","Bagal");