

///////////////////////////
/////TABLE OF CONTENTS/////
///////////////////////////
//0. Linking to HTML and setting variables.
    //I added all the getElement and eventListener here.

//1. Storage for Questions (Objects in array).
    //To be able to add as many questions as I wanted, without having to alter the code, I used an array to fill a template function called displayQuestion.

//2. Sound Effects.
    //Sunday was a confusing day of coding so I added this to make me happy.

//3. Variables for game function.
    //These are going to help feed variable into my functions an needed to load after my storage for questions.

//4. Game function.
    // startButton(); - sets the display properties as needed for my HTML then calls my timer and displayQuestions functions.
    // countDown(); - sets my timer and when it hits 0 will stop the game.
    // displayQuestion(); - is the template that my object array fills.
    // checkAnswer(); - this one does a lot of the heavy lifting, activated by the onclick property from the HTML it updates score, alters timer and checks to see if the game is over.

//5. Scoreboard and local storage functions.


///////////////////////////
///////////////////////////

//0. Linking to HTML and setting variables.
    // Timer start
        var timerBox = document.getElementById("timerBox");
        var timeOut = document.getElementById("timeOut")
        var displayScores = document.getElementById("displayScores")
        var scoreBoard = document.getElementById("scoreBoard");
        var listOfWinners = document.getElementById("listOfWinners");
    // Start Game button
        var startButton = document.getElementById("start");
        var header = document.querySelector("header");
        var quizContainer = document.getElementById("quizContainer");
        var playerNameBox = document.getElementById("playerNameBox");
    // Questions and Options ID's linking to HTM
        var questionText = document.getElementById("questionText");
        var optionA = document.getElementById("optionA");
        var optionB = document.getElementById("optionB");
        var optionC = document.getElementById("optionC");
        var optionD = document.getElementById("optionD");
    // Event Listeners
        startButton.addEventListener("click", startGame);
    // leaderBoard.addEventListener("click", leaderBoard);
    

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

    ///1. Storage for Questions (Objects in array).
const questionContent = [ 
    {   question: "When watching Jumanji and writing JavaScript you must:",
        optionA: "Turn off the movie.",
        optionB: "Remember the 90's and feel old.",
        optionC: "Build as many Jumanji puns!! Duh!",
        optionD: "Cry and accept defeat.",
        answer: "optionC",
    },
    {   question: "Rolling the dice is to Jumanji, what [BLANK] is to 'Java-manji.':",
        optionA: "Using a boolean.",
        optionB: "Throwing your laptop into a river.",
        optionC: "Calling a customer service number.",
        optionD: "Using math.random.",
        answer: "optionD",
    },
    {   question: "After adding a click event listener, the user can...",
        optionA: "Hear a clicking sound in the walls.",
        optionB: "Expect the application to respond to mouse clicks.",
        optionC: "Use the mouse like a throwing star.",
        optionD: "Roll the dice, landing on pairs 3 times, to exit the game.",
        answer: "optionB",
    },
    {   question: "The chance of receiving additional points for having so many Jumanji references in a JavaScript quiz is?",
        optionA: "Extremely high, the content was entertaining.",
        optionB: "Low, I hate Jumanji.",
        optionC: "The application quit unexpectedly, report issue?",
        optionD: "Ive been grading for hours and I just wanna take a nap!",
        answer: "optionA",
    }];

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//2. Sound Effects.

function playGameDrums() {
    var audio = new Audio('assets/sounds/jumanjiDrums.mp3');
    audio.play();
}
function playCorrect() {
    var audio = new Audio('assets/sounds/correct.wav');
    audio.play();
}
function playIncorrect() {
    var audio = new Audio('assets/sounds/wrong.mp3');
    audio.play();
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//3. Variables for game function.

var score = 0;
var timeLeft = 30.00;
var lastQuestion = questionContent.length-1; // I need to know this so I can end the game
var currentQuestion = 0; // This is set to 0 because my questions are objects in the array above, I want to be able to ++ the currentQuestion value to move on to the next question as we go along.


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// 4. Game function.

function startGame (){
    startButton.style.display = "none";
    header.style.display = "none";
    quizContainer.style.display = "block";
    questionText.style.display = "block";
    displayQuestion();
    setTimeout(countdown, 1000);
    playGameDrums();
}

function countdown() {
    timeLeft--;
    timerBox.innerHTML = ( "TIMER: " + timeLeft );
    if (timeLeft > 0) {
        setTimeout(countdown, 1000);
    } else {
        quizContainer.style.display = "none";
        questionText.style.display = "none";
        timeOut.style.display = "block";
    }
};

//im pulling data out of my questionContent array and using innerHTML to fill in the ol/li in my index.html 
//using the ID tags i pulled using getElementId.

function displayQuestion(){ 
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
        timeLeft+=10; // Time bonus for correct answer
        playCorrect();
        updateScores();
    } else {
        timeLeft-=10;// Time penalty for incorrect answer
        playIncorrect();
    } if (currentQuestion < lastQuestion){
        currentQuestion++;
        displayQuestion();
    } else if (currentQuestion == lastQuestion) {
        loadScoreBoard();
        quizContainer.style.display = "none";
        scoreBoard.style.display = "block";
        timeOut.style.display = "none";
        timerBox.style.display = "none";
        displayScores.style.display = "none";
        
    } else {
        quizContainer.style.display = "none";
    }
}

function updateScores() {
    displayScores.innerText = ("CORRECT ANSWERS: " + score); 
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//5. Scoreboard and local storage functions.

function loadScoreBoard(){
    var totalScore = score * timeLeft;
    timeLeft = 1000;

    //Gets the last winner from the last player and adds it to the variable "pastWinner"
    var pastWinner = JSON.parse(localStorage.getItem("leaderBoard")); 

    var playerName = prompt("Player Name: ", "Player 1");

    var currentWinner = document.createElement("li");
    currentWinner.innerText = "Nice Try " + playerName + "! Your score was " + totalScore + " points";
    listOfWinners.appendChild(currentWinner);
    
    if (!pastWinner) {
        localStorage.setItem("leaderBoard", JSON.stringify({ 
            Player: "",
            Score: "",
        }));
    } else {

    var pastWinnerScore = document.createElement("li");
    pastWinnerScore.innerText = "Last winner: " + pastWinner.Player + " scored " + pastWinner.Score + " points";
    listOfWinners.appendChild(pastWinnerScore);
}

    localStorage.setItem("leaderBoard", JSON.stringify({ 
        Player: playerName,
        Score: totalScore,
    }));
}


