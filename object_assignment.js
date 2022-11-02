let object_teacher = {
  teacher_name: "Reshma Waghmode",
  age: 27,
  address: "solapur",
  Mobile_no: 9145423080,
  Degree: "Engineering",

 Degrees:{
 engineering:  "chemical engineering" ,
  Master_In:   "software Testing",
   PHD:           "mechanical engineering",
   },
    Certificate:{
Certificate1:"'Hacker Rank Participation'",
 certifacate2:`Adv Programming', 'IFE Course`,
  },
 details:function(){
    return `${object_teacher.Degrees.engineering},${object_teacher.Degrees.Master_In}, ${object_teacher.Degrees.PHD}`;
  },
  

  }
 
  console.log(object_teacher);
  let result=object_teacher.details();
 console.log(`teacher degrees as follows=${result}`);
 
console.warn("------------------------------------------------------------------------------------");
console.log("total Degrees of teacher=",Object.values(object_teacher.Degrees));

  
console.log("============Teachers Degree Are======================");
console.log(object_teacher.Degrees );
console.log("===================Teacher Certificates==========================================");
console.log(object_teacher.Certificate);
console.log("===========================Adding New Property================================================");
object_teacher.state =  "State Name: Maharashtra";
console.log(object_teacher.state);
console.log("Modify existing property:", object_teacher.Degrees.PHD="Mechanical engineering");
console.log("===========================Delete Certificate from Nested Object======================");
delete object_teacher.Certificate.certifacate2
console.log(object_teacher.Certificate);
console.log("Add new certificate in nested object:", object_teacher.Certificate="Certificate2: Adv Programming");