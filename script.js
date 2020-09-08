var startButton = document.getElementById("play-btn");
var question = document.getElementById("question");
var quizContent = document.getElementById("questions-container");

var answer = document.getElementsByClassName("answer-btn");
let newChoice1 = document.getElementById("answer-1");
let newChoice2 = document.getElementById("answer-2");
let newChoice3 = document.getElementById("answer-3");
let newChoice4 = document.getElementById("answer-4");

var scoresButton = document.getElementById("scores-btn");
var recentScore = document.getElementById("score");


var timerEl = document.getElementById("timer");

var score = 0;
var questionCounter = 0;
var timer = 0;

startButton.addEventListener("click", startGame);
quizContent.classList.add("hidden");

// Starts the game by removing the home page content and displaying the first question.
function startGame() {
    console.log("The game has started!");
    startButton.classList.add("hidden");
    scoresButton.classList.add("hidden");
    quizContent.classList.remove("hidden");
    recentScore.textContent = ("Current Score = " + score);
    getNextQuestion();
}


// Displays each multiple choice question and answer set from the index.
function getNextQuestion() {
    question.textContent = questions[questionCounter].question;

    newChoice1.textContent = questions[questionCounter].choice1;
    newChoice1.addEventListener("click", selectAnswer);

    newChoice2.textContent = questions[questionCounter].choice2;
    newChoice2.addEventListener("click", selectAnswer);

    newChoice3.textContent = questions[questionCounter].choice3;
    newChoice3.addEventListener("click", selectAnswer);

    newChoice4.textContent = questions[questionCounter].choice4;
    newChoice4.addEventListener("click", selectAnswer);
}

/*Validates user's selected answer by adding points for correct answers and 
 decreases the countdown timer by 1 minute if for incorrect answers.*/
function selectAnswer() {
    console.log("The answer has been selected!");
    var answerSelected = this.textContent;
    console.log(answerSelected);
    if (answerSelected === questions[questionCounter].answer) {
        console.log("correct");
        document.getElementById("score").innerHTML = ("Current Score = " + (score+=10));
    } else {
        console.log("incorrect");
        updateTimer() 
        time -= 60;
    }

    questionCounter++;

    if (questionCounter >= 0 && questionCounter < 4) {
        getNextQuestion();
    } else {
        gameOver();
    }
}

// Ends the game by clearing the questions container and displaying "Game Over."
function gameOver() {
    document.getElementById("questions-container").innerHTML = "";
    document.getElementById("main-title").textContent = "Game Over";

}

// High Scores Display
scoresButton.addEventListener("click", highScores) 

function highScores() {
    gameOver();
    startButton.classList.add("hidden");
    scoresButton.classList.add("hidden");
    document.getElementById("main-title").textContent = "High Scores";
}

/* 5 minute countdown timer starts when the quiz begins. If the timer runs out
before the user has finished the quiz then the game will be over.*/
const startingMinutes = 5;
var time = startingMinutes * 60;

setInterval(updateTimer, 1000);

function updateTimer() {
    const minutes = Math.floor(time / 60);
    var seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds: seconds;

    timerEl.innerHTML = minutes + ":" + seconds;
    time--;

    if (time === 0) {
        gameOver();
    } 
}

// Question and Answer Index
var questions = [
    {
        question: "Which answer does NOT describe Javascript?",
        choice1: "A. Enables dynamically updated content",
        choice2: "B. It is a markup language that structures web content",
        choice3: "C. It is a layer of standard web technology",
        choice4: "D. It is a scripting language",
        answer: "B. It is a markup language that structures web content"
    }
    ,
    {
        question: "What was JavaScript originally named?",
        choice1: "A. Mocha",
        choice2: "B. Pache",
        choice3: "C. Venecia",
        choice4: "D. Casiopea",
        answer: "A. Mocha"
    }
    ,
    {
        question: "Which statements about variables are TRUE?",
        choice1: "A. They hold data values",
        choice2: "B. A variable can be changed any time",
        choice3: "C. Values are assigned to a variable using the equal to operator",
        choice4: "D. All of the above",
        answer: "D. All of the above"
    }
    ,
    {
        question: "JavaScript is put inside which HTML element?",
        choice1: "A. <java>",
        choice2: "B. <js>",
        choice3: "C. <script>",
        choice4: "D. <javascript>",
        answer: "C. <script>"
    }
];

