
console.log("===============================College class Object==============================================");
class College {
    constructor(collegeName,address, estabilished, department){
           this.collegeName=collegeName;
           this.address=address;
           this.estabilished = estabilished;
          this.department = department ;
        }
    }
let clgInfo = new College("Korti College Of Eng","Pandharpur",1960,"7");
let Name =new College("KBP College Of Bsc","pandharpur",1949,"9");
let clgScience = new College("Modern College OF Science","Pune",1970, 7);
let clgAkluj =  new College("Sahakar Maharshi college Of Eng","Akluj",1964,6);
console.log(Name);
console.log(clgInfo);
console.log(clgScience);
console.log(clgAkluj);
console.log("==========================Vehical Class Object================================================================");
class Vehical{
    constructor(Vehicalname,color,Number,Speed){
    this.Name =Vehicalname;
    this.color = color;
    this.Number = Number;
    this.Speed = Speed;
  }
}
let carName = new Vehical("Ertiga","White", 'MH-7444','165-170Kmph');
let van = new Vehical("Brezza",'silver','MH-3826','170Km/h');
let swift = new Vehical("Swift", 'White', 'MH-7797','155 Kmph');
let dzire = new Vehical("Dzire",'Oxford Blue','MH-5780','155Kmph');
let hyundai = new Vehical("Hyundai", 'Black','MH-1745','160Kmph');
console.log(carName);
console.log(van);
console.log(swift);
console.log(dzire);
console.log(hyundai);



  