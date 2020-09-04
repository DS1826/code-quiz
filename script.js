var startButton = document.getElementById("play-btn");
var questionContainer = document.getElementById("question-container");
var question = document.getElementById("question");
var answer = document.getElementsByClassName("answer-text");

var currentQuestion;
var score = 0;
var questionCounter = 0;
var availableQuestions = 0;


startButton.addEventListener("click", startGame)

// Start the game by displaying the first question with answer selections and next button
function startGame() {

    getNextQuestion();
}

function getNextQuestion() {
 
}

function selectAnswer () {

}

// Need to set up Question and Answer Indexes
var questions = [
    {
        question: "Which answer does NOT describe Javascript?",
        choice1: "A. Enables dynamically updated content",
        choice2: "B. It is a markup language that structures web content",
        choice3: "C. It is a layer of standard web technology", 
        choice4: "D. It is a scripting language",
        answer: 2
    }
,
    {
        question: "What was JavaScript originally named?",
        choice1: "A. Pache",
        choice2: "B. Mocha",
        choice3: "C. Venecia", 
        choice4: "D. Casiopea",
        answer: 2    
    }
,
    {
        question: "Which of the following statements about variables are TRUE?",
        choice1: "A. They hold data values",
        choice2: "B. A variable can be changed any time",
        choice3: "C. Values are assigned to a variable using the equal to operator", 
        choice4: "D. All of the above",
        answer: 4
    }
]