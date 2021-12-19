

//Things i need to link to HTML
    // Timer start
        var timerBox = document.getElementById("timerBox");
        var timeOut = document.getElementById("timeOut")
    // Start Game button
        var startButton = document.getElementById("start");
        var header = document.querySelector("header");
        var quizContainer = document.getElementById("quizContainer");
    // Questions and Options ID's linking to HTML
        var questionText = document.getElementById("questionText");
        var optionA = document.getElementById("optionA");
        var optionB = document.getElementById("optionB");
        var optionC = document.getElementById("optionC");
        var optionD = document.getElementById("optionD");
    // Event Listeners
    startButton.addEventListener("click", startGame);
    // optionA.addEventListener("click", );


    // scoreboard
        // Check for data in local storage
        var highScore = localStorage.getItem('highScore');
        var score = 0;
        var timeLeft = 31.00;

// functions for sounds

function playGameDrums() {
    var audio = new Audio('assets/sounds/jumanjiDrums.mp3');
    audio.play();
}
function playCorrect() {
    var audio = new Audio('assets/sounds/correct.wav');
    audio.play();
}
function playInorrect() {
    var audio = new Audio('assets/sounds/wrong.mp3');
    audio.play();
}

// Storage for questions and answers
const questionContent = [ 
{   question: "When watching Jumanji and writing JavaScript you must:",
    optionA: "Turn off the movie",
    optionB: "Google the IMDB of the whole cast and feel old",
    optionC: "Build as many Jumanji puns into your JS as possible",
    optionD: "Cry and accept defeat",
    answer: "optionC",
},
{   question: "Rolling the dice is to Jumanji, what [BLANK] is to 'Java-manji':",
    optionA: "Using a boolean.",
    optionB: "Throwing your laptop into a river",
    optionC: "Calling the customer service number",
    optionD: "Using math.random.",
    answer: "optionD",
},
{   question: "After adding a click event listener, the user can...",
    optionA: "Hear a clicking sound in the walls",
    optionB: "Expect the application to respond to mouse clicks",
    optionC: "Use the mouse like a throwing star",
    optionD: "Roll the dice, landing on pairs 3 times, to exit the game",
    answer: "optionB",
},
{   question: "The chance of receiving additional points for having so many Jumanji references in a JavaScript quiz is?",
    optionA: "Extremely high, the content was very entertaining",
    optionB: "Low, I hate Jumanji",
    optionC: "The application quit unexpectedly, report issue?",
    optionD: "Ive been grading for hours and I just wanna take a nap?",
    answer: "optionA",
}];

// START GAME FUNCTION

function startGame (){
    startButton.style.display = "none";
    header.style.display = "none";
    quizContainer.style.display = "block";
    questionText.style.display = "block";
    optionA.style.display = "block";
    optionB.style.display = "block";
    optionC.style.display = "block";
    optionD.style.display = "block";
    displayQuestion();
    setTimeout(countdown, 1000);
    playGameDrums();
}

function countdown() {
    timeLeft--;
    timerBox.innerHTML = String( timeLeft );
    if (timeLeft > 0) {
        setTimeout(countdown, 1000);
    } else {
        quizContainer.style.display = "none";
        questionText.style.display = "none";
        optionA.style.display = "none";
        optionB.style.display = "none";
        optionC.style.display = "none";
        optionD.style.display = "none";
        timeOut.style.display = "block";
    }
};



// GAME FUNCTION

var lastQuestion = questionContent.length-1; // I need to know this so I can end the game
var currentQuestion = 0; // This is set to 0 because my questions are objects in the array above, I want to be able to ++ the currentQuestion value to move on to the next question as we go along.

function displayQuestion(){ //im pulling data out of my questionContent array and using innerHTML to fill in the ol/li in my index.html using the ID tags i pulled using getElementId.
    var question = questionContent[currentQuestion];
    questionText.innerHTML = "<h2>" + question.question + "</h2>";
    optionA.innerHTML = question.optionA;
    optionB.innerHTML = question.optionB;
    optionC.innerHTML = question.optionC;
    optionD.innerHTML = question.optionD;
    
}


function checkAnswer(userAnswer){
    if ( userAnswer == questionContent[currentQuestion].answer){
        score++;
        playCorrect();
    } else {
        timeLeft--;
        playInorrect();
    }
    console.log(score);
    console.log(userAnswer);
    console.log(questionContent[currentQuestion].answer)
    if (currentQuestion < lastQuestion){
        currentQuestion++;
        displayQuestion();
    } else {
        quizContainer.style.display = "none";
        questionText.style.display = "none";
        optionA.style.display = "none";
        optionB.style.display = "none";
        optionC.style.display = "none";
        optionD.style.display = "none";
    //
    }
}



