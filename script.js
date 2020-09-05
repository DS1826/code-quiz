var startButton = document.getElementById("play-btn");
var question = document.getElementById("question");
var quizContent = document.getElementById("questions-container");
var answer = document.getElementsByClassName("answer-btn");
var scoresButton = document.getElementById("scores-btn");
var newChoice1 = document.getElementById("answer-1");
let newChoice2 = document.getElementById("answer-2");
let newChoice3 = document.getElementById("answer-3");
let newChoice4 = document.getElementById("answer-4");

var currentQuestion;
var score = 0;
var questionCounter = 0;
var availableQuestions = 0;

startButton.addEventListener("click", startGame);
quizContent.classList.add("hidden");

// Start the game by displaying the first multiple choice question.
function startGame() {
    console.log("The game has started!");
    startButton.classList.add("hidden");
    scoresButton.classList.add("hidden");
    quizContent.classList.remove("hidden");
    getNextQuestion();
}

// Cycles through each multiple choice question in the array.
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

// Validates the user's selected answer as true or false.
function selectAnswer() {
    console.log("The answer has been selected!");
    var answerSelected = this.textContent;
    console.log(answerSelected);
    if (answerSelected === questions[questionCounter].answer) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }

    questionCounter++;
    

    if (questionCounter >= 0 && questionCounter < 3) {
        getNextQuestion();
    } else {
        document.getElementById("questions-container").innerHTML = "";
        document.getElementById("main-title").textContent = "Game Over";
        scoresButton.classList.remove("hidden");
        scoresButton.addEventListener("click", highScores)
    }
}

// Displays local storage record of user high scores.
function highScores() {
    document.getElementById("main-title").textContent = "High Scores";
    scoresButton.classList.add("hidden");

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
];


