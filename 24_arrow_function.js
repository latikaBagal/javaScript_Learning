function display(a,b){
    console.log("Hello");
}


(a,b) => {
console.log("Hello");

}
console.log("=========================function expression=========================================================");
let fun=function show(n1,n2){
 return n1 + n2;
}
fun(10,20);

console.log("========================function expression transform arrow function========================================");

let show = (n1,n2) =>{
    return n1 + n2;
}
show(10,20);



let add = function(n1,n2){ // function expression
return n1+n2;
}
console.log( add(10,20));

console.log("==========================Arrow function==============================================");
let sum =  (n1,n2) =>   n1+n2;
console.log( sum(10,20));


console.log("======================Arrow function with no argument============================================================");
let sachin= ()=> {
console.log("Hello");
}
sachin();