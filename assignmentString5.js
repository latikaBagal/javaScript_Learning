
var stringHandsOn = function(){
var greet =`   Hey you are doing good, keep it up   `;

console.log(`${greet}`);

console.log("======================================================");
console.log("length of the string");

var count = greet.length;
console.log(count);
console.log("==========================================================");

var str=greet.trim();
 var  remove_extra_space= str.length;
console.log(`${remove_extra_space}`);
var difference= count - remove_extra_space;
console.log(difference);
 var last_character = str.charAt(0);
 console.log(last_character);
 var demo =str.charAt(33);
 console.log(demo);
 var wordLength=str.split(" ");
 console.log(wordLength);
 console.log("----------------------------------------------------------------");
 var substring = str.indexOf("good");
 console.log(`index of word "good" from given string:- ${substring}`);
 console.log("-------------------------------------------------------------------");
 console.log('8.substring starting from index 22 using substring:-${str.substring(22)}');
 console.log(`Substring starting from index of 22 using slice:-${str.slice(22)}`);
 console.log("===========================================================================");
 console.log(`9.Check,is string ends with word "up" :-${str.includes("up")}`);
 console.log("=================================================================================");
 console.log(`10.Check, is string ends with word "hey":-${str.includes("Hey")}`);
}

stringHandsOn();



