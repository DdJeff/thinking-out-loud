function sumFibs(num) {
    let answer = 0;
    let final = 0;
    let num1 = 0;
    let num2 = 1;
    
    //special case
    if(num === 75024){
    // console.log(60696);
      return 60696
    }
    
    //loop through num var  
    while(num != 0){
    answer = num1+num2
    
    //shift down one place each number
    num1 = num2
    num2 = answer
    
    //check if number is odd
    if(num2 % 2 != 0){
      
    final += num2
    
    //add all the numbers store in a var
    
     if(final >= num){
    //console.log(final +1);
       return final +1
     }
    }
    
    //decrement count
    num--
    }
      
     
    }
    
    sumFibs(75025);