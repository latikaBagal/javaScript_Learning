function square(value) {
   console.log(value * value);

}
square(5);
square(6);
square(25);
square(100);

var area = function (base, height) {
   var areaof_trangle = 1 / 2 * base * height;
   console.log(areaof_trangle);
}
area(45, 34);

var area = function (arg1, arg2) {
   var areaof_rectangle = arg1 * arg2;
   console.log(areaof_rectangle);
}
area(499, 917);

var greet = "Javascript the most popular language";
console.log(greet);

console.log("========================Total character available in string=================================");
var count = greet.length;
console.log(count);

console.log("============================inddex of character S==================================================");
var position = greet.indexOf('s');
console.log(position);

console.log("============================index of String LANG==================================================");
var position = greet.indexOf('lang');
console.log(position);

console.log("=================last character======================="); 
var string = greet.charAt(count-1);
console.log(string);

console.log("====================3rd last character================================");
var char = greet.charAt(count-3);
console.log(char);











