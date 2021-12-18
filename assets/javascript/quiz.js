

//Things i need to link to HTML
    // Timer start/stop
        var timerCount = document.querySelector("timerBox")
    // Questions
        var questionText = document.querySelector("questionText")
    // Answers and correct answers
        var answerA = document.querySelector("answerA")
        var answerB = document.querySelector("answerB")
        var answerC = document.querySelector("answerC")
        var answerD = document.querySelector("answerD")
    // scoreboard
        // Check for data in local storage


// Storage for questions and answers
const questionContent = [ {
    question: "When watching Jumanji and writing JavaScript you must:",
    choices: ["Turn off the movie", "Google the IMDB of the whole cast and feel old", "Build as many Jumanji puns into your JS as possible", "Cry and accept defeat"],
    answer: "Build as many Jumanji puns into your JS as possible",
},
{   question: "Rolling the dice is to Jumanji, what ____________ is to 'Javamanji':",
    choices: ["Using a boolean.", "Using math.random.", "Throwing your laptop into a river", "Calling the customer service number"],
    answer: "Using math.random.",
}];


//TEST ZONE//
function fillQuestion() {
    for (i=0 ; i<questionContent.length-1 ; i++){
        document.getElementById("questionText").textContent = ("Question: " + questionContent);
        console.log(questionContent.question);

    }
};
fillQuestion();

fillQuestion();


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