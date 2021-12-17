

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
const question1 = ["When watching Jumanji and writing JavaScript you must:", "Turn off the movie", "Google the IMDB of the whole cast and feel old", "Build as many Jumanji puns into your JS as possible", "Cry and accept defeat"];
const question2 = [];
const question3 = [];

//TEST ZONE//
function fillQuestion() {
    questionText.textContent = question1[0];
    answerA.textContent = question1[1];
    answerB.textContent = question1[2];
    answerC.textContent = question1[3];
    answerD.textContent = question1[4];
}


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