function gradeSystem(score){

if( score<35 && score>=0 && score!="" && score!=null){
    console.log(`For input value:${score}:- you are failed`);
}
else if(score==35 ){``
console.log(`Marks: ({score}:- you are passed ` );
}
else if(score>=35 && score<60 ){
    console.log(`marks: ${score} you are passed and grade is 'c'`);
}
else if(score>=60 && score<75){
console.log(`Marks: ${score} you are passed grade 'B'`);
}
else if(score>=75 && score<=90){
    console.log(`Marks ${score} you are passed grade 'A'`);
}
else if(score>=90 && score<=100){
    console.log(`Marks ${score} you are passed grade is 'A+'`);
}
else{
    console.log("--------------------invalid input---------------------------------");
}
}
gradeSystem(66);
gradeSystem(13);
gradeSystem("");