var wordLengthSquare = function (word) {
var wordLength = word.length;
return wordLength *wordLength;
}
console.log(wordLengthSquare("javaScript"));
 console.log ( wordLengthSquare("Google"));
 console.log (wordLengthSquare("developer"));


// var stringLength = function(){
// var givenStringLength = "I am Angular Developer".length;
// var result = "I am Angular Developer".split("");
// var total_word = result.length;
//  givenStringLength/total_word;
// }


var str = "I am angular developer";
var stringLength = str.length;
var wordLength= str.split(" ");
var givenStringLength = stringLength/wordLength;
console.log(givenStringLength );
console.log(stringLength*wordLength);



