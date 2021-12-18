

//Things i need to link to HTML
    // Timer start/stop
        var timerCount = document.getElementById("timerBox")
    // Questions
        var questionText = document.getElementById("questionText")
    // Answers and options
        var optionA = document.getElementById("optionA")
        var optionB = document.getElementById("optionB")
        var optionC = document.getElementById("optionC")
        var optionD = document.getElementById("optionD")
    // scoreboard
        // Check for data in local storage
        var highScore = localStorage.getItem('highScore');


// Storage for questions and answers
const questionContent = [ 
{   question: "When watching Jumanji and writing JavaScript you must:",
    optionA: "Turn off the movie",
    optionB: "Google the IMDB of the whole cast and feel old",
    optionC: "Build as many Jumanji puns into your JS as possible",
    optionD: "Cry and accept defeat",
    answer: "Build as many Jumanji puns into your JS as possible",
},
{   question: "Rolling the dice is to Jumanji, what ____________ is to 'Java-manji':",
    optionA: "Using a boolean.",
    optionB: "Throwing your laptop into a river",
    optionC: "Calling the customer service number",
    optionD: "Using math.random.",
    answer: "Using math.random.",
}];

// GAME FUNCTION
console.log(questionText);
console.log()


var lastQuestion = questionContent.length-1;
var currentQuestion = 0;

function displayQuestion(){
    var question = questionContent[currentQuestion];
    questionText.innerHTML = "<h1>" + question.question + "</h1>";
    optionA.innerHTML = question.optionA;
    optionB.innerHTML = question.optionB;
    optionC.innerHTML = question.optionC;
    optionD.innerHTML = question.optionD;

}
displayQuestion();



//TEST ZONE//
console.log(questionContent);
console.log(questionContent[0].question)
console.log(questionContent[0].optionA)

// function fillQuestion(i) {
//     for (i=0 ; i<questionContent.length; i++){
//         let (questionText[i]) = questionContent.find(questionContent => questionContent.question);
//         console.log(questionText[i]);

//     }
// };
// fillQuestion();
//END TEST ZONE




// Storage for vars
timerInitialLength = 0;




//functions i need
    //timer
        //on click run timer
        //on click load game
function startTimer() {
    timerInitialLength = 60;


}

    //the game
        //get questions
        //get answers
        //if answer true ++ score var
        //if answer false -10 timer
        //reload get question/answer
        //ask for name for leaderboard
        //set name and scores on local storage

    //display leaderboard