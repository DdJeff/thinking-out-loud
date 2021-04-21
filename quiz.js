let correctAnswer = false;

let question = "What is a quiz?\n";

// adding the options
question += "A. A test of knowledge, especially a brief, informal test given to students\n";
question += "B. Something silly\n";
question += "C. More silliness\n";
question += "D. Yet more silliness\n";
question += "E. The most silly\n";

//asking user
let reg = /[B-E]/

while(true) {

    let answer = prompt(question)//what ever the user puts will be the value of the answer

    //check if they left it blank
    if(answer !== null){
        //makes their answer uppercase
        answer = answer.toUpperCase();
    }

    console.log(answer);
    //using test cases
    if(answer == ("A")){
       
        alert("Correct!");
        break;
    } else if(answer == "B" || answer == "C" || answer == "D" || answer == "E"){//this is a regular expression it takes the place of asking if answer.equals("B") || answer.equals("C") || ... to e
        alert("Incorrect, Please try again.")
    }else{
        alert("Invalid answer. Please enter A, B, C, D, or E.");
    }
}
