let fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(fruits_seasonal);
console.log("First elment of given String");
let starting_element = fruits_seasonal.slice(0, 1)
console.log(starting_element);
console.log("Last element of given string");
let last_element = fruits_seasonal.slice(4)
console.log(last_element);
console.log("Q.2 Add papaya before element banana");
fruits_seasonal.unshift("papaya");
console.log(fruits_seasonal);
console.log("Q.3 Remove mango from the array");
fruits_seasonal.splice(4, 1,);
console.log(fruits_seasonal);
console.log("Add element pineapple at the last position");
fruits_seasonal.splice(5, 1, "pineapple");
console.log(fruits_seasonal);
console.log("Insert element Dragon Fruit before Watermelon");
fruits_seasonal.splice(3, 1, "Dragon Fruit");
console.log(fruits_seasonal);
console.log("Replace element Orange With Kiwi");
fruits_seasonal.splice(2, 1, "Kiwi");
console.log(fruits_seasonal);
console.log("Log the element starting from index 1 to 4");
let slicedValues = fruits_seasonal.slice(1, 4);
console.log(slicedValues);
console.log("select last three element");
let lastThreeElement = fruits_seasonal.slice(3);
console.log(lastThreeElement);