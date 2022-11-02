function evenPositionedChars(myString) {
    for (let index = 0; index < myString.length; index++) {
        //console.log(index%2==0);
        var chh = myString.charAt(index);
        if (index%2==0 && chh!=" ") {
         console.log(chh);   
        }
            
        
     // var chh =  myString.charAt(index);
  }
}
evenPositionedChars("Hard Work always pays back");
evenPositionedChars("Soon I will be Angular IT");
