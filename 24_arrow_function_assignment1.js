console.log("======Q 1. With no args and no return value,log message on console inside arrow function======");
let show = ()=>{
console.log("Good Evening, Today is Sunday");

}
show();

console.log("Q 2. With 3 args and no return value,for received 3 parameters perform the multiplication");
let display=(n1,n2,n3=1)=>{
console.log(n1*n2*n3);

}
display(5,5,2);
display(10,4);


console.log("Q3.With 5 args and return value such as,for received params it should do the addition");
let addition = (n1,n2,n3,n4,n5)=>{
  return n1+n2+n3+n4+n5;
  
}
console.log("Addition of (100,100,200,349,756) is:-", addition(100,100,200,349,756));
console.log("");
console.log("New arrow function is:-" , addition( "I am", "learning", "ES6", "features", "in depth"));



