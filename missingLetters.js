function fearNotLetter(str) {
let standard = "abcdefghijklmnopqrstuvwxyz"
  
        if (standard == str){
        return undefined
        }
        //check full str
        outerLoop : for(let i =0; i < standard.length; i++){
    
        //once first letter match check that squence for mismatch
        if(standard[i] == str[0]){
            standard = standard.slice(i, standard.length)

            innerLoop: for(let j = 0; j < standard.length; j++){

                if(standard[j] !== str[j]){
                return standard[j]

              }   
           }
        }           
     } 
  }
  
  fearNotLetter("abce");