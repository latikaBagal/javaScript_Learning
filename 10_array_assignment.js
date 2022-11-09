console.warn("===============================================Assignment on Array==================");
arrayOfNames = ["Kamat","Memon","Nashpati","Taimur","Menon","Kamat","Andy","Taimur"]
console.log(arrayOfNames);


console.warn("=============================Delete Duplicate names================================");
let removeDuplicateNames = new Set(arrayOfNames);
console.table(removeDuplicateNames);

console.warn("===============================Count of how many duplicate elements removes======================");
let lengthOfArrayOfNames = arrayOfNames.length;
console.log("Count of Unique Element:-",lengthOfArrayOfNames);

console.log("");
let lengthOfDuplicateNames = removeDuplicateNames.size;
console.log("Length of After removing Duplicatenames:-",lengthOfDuplicateNames);

console.log("");
let totalCountOfDuplicateElement = lengthOfArrayOfNames-lengthOfDuplicateNames;
console.log("Total Count Of Duplicate Element:-", totalCountOfDuplicateElement);
