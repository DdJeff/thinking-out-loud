function myReplace(str, before, after) {
    // make a fucntion to change case
    
      const checkCase = (index) =>{
        let upper = index[0].toUpperCase()
        let end =  index.slice(1)
        return upper.concat(end)
      }
    //breaking up word
      let a = str.split(" ")
    
    // check for word
     for(let i = 0; i < a.length; i++){
    
        if(a[i] == before){

          if(a[i][0] !== a[i][0].toUpperCase()){
               a[i] = after.toLowerCase();
          }else{
               a[i] = checkCase(after)  
          }  
        }
      }
     
      str = (a.join(" "))
      
      return str;
    }
    
    myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");