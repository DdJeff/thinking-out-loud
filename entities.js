function convertHTML(str) {

    const key = (index) =>{
      switch (index){ 
        case "&" : return "&amp;";
        case "<" : return "&lt;";
        case ">" : return "&gt;";
        case "\"" : return "&quot;";
        case "'" : return "&apos;";
      }
    }
    
    //isolating elements
     str = str.split("")
  
    //comparing elements
  
      for(let i = 0; i < str.length; i ++){
        if(str[i] == "&" || str[i] == "<" 
        || str[i] == ">" || str   [i] == "\"" || str[i] == "'"){
  
          str[i] = key(str[i])
        }//end if
      }
      let a = "i love the cakes"
    
    //return updated str
    return str.join("");
  }
  
  convertHTML("<>");
  