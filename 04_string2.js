console.log("=================Concat Method=============================")
 var fName = "Virat";
var lName = "Kohli";
var result = fName.concat(lName); // ViratKohli
console.log(result);

console.log("==============replace()===============");
var greet = "Good Morning bro and sis";
var replaceDemo = greet.replace("Morning", "Evening");
console.log(replaceDemo);

console.log("==============toUpperCase() and toLowerCase()===============");
console.log(replaceDemo.toUpperCase());
console.log(replaceDemo.toLowerCase());

console.log("==========================trim()==========================")
var greet = "  Good Morning bro and sis   ";
console.log(greet.length);
var trimResult =greet.trim();
console.log(trimResult.length);

 console.log("=================includes()============================");
 var greet = "Good Morning bro and sis";
 console.log(greet.includes("bro"));

 console.log("======================substring=================================");
 var greet = "Good Morning bro and sis";
 console.log(greet.substring(8));
 console.log(greet.substring(13,17));

 console.log("==============slice()====================");
 console.log(greet.slice(13,17));
 console.log(greet.slice(13,));

 console.log("=================split()==========================");
 var studentList = "sunil,Anil,Andy,Jenny,Lata";
 var splitResult = studentList.split(", ");
 console.log(splitResult);

 var impQuote = `"Do or Die" this attitude is important for this training`;
 console.log(impQuote);

 var fName = "Virat";
 var lName = "Kohli";
// first name:${fName} last Name: ${lName}
console.log(`first Name: ${fName} and Last Name: ${lName}`);

 console.log("=====================split()===============================");
 var res = "Hey you are doing good keep it up";
var stepSplit =  res.split(" ");
console.log(stepSplit);
console.log(stepSplit.length)

var givenString = "Hey you are doing good keep it up";
// var lengthOfString = givenString.length;
console.log(`2. Length of Given string is: ${ givenString.length} `);