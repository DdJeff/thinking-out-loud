//Smallest Common Multiple
const smallestCommons(arr) => {

    const [num1,num2] = arr = arr.sort((a,b)=> a-b);
    
    let commonMultipules = 0;
    let testCase = false;
    let multipules = 0;
  
    const range = (num1,num2,commonMultipules) =>{
      let itDoes = true;
      for(let i = num1; i <= num2; i++){
       // console.log(num1, num2, "range")
         if(commonMultipules % i !== 0){
              return itDoes = false
         }else{
           continue;
         }
      }
  
      return itDoes;
    }
    
    while (!testCase){
  
    //find muiltpiles of largest num
     multipules += num2
  
   //check to see if this muiltpile is a common muiltipile 
  
    if(multipules % num1 == 0){
      commonMultipules = multipules
    
    }else{
      commonMultipules = num2;
    }
  
    //match the common muil and check for lcm that is disvioble   by all numbers inbetween 
  
    testCase = range(num1,num2,commonMultipules);
    } //end while loop
    
    return (commonMultipules);
  }
  
  
  smallestCommons([23,18]);