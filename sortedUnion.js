const uniteUnique = (...arr) => {
    // combine
    let combined = arr.flat()
   
    //make empty arr
    let unique = []
   
    //check combined arr and add uniq nums to empty arr
    combined.forEach((el) => {
     if(unique.includes(el) === false){
       unique.push(el)
     }
   }) 
   
     console.log(unique)
     return unique;
   }
   
   uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);