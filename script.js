var startButton = document.getElementById("play-btn");
var question = document.getElementById("question");
var quizContent = document.getElementById("questions-container");
var highScoreEl = document.getElementById("high-scores");
var scoresEl = document.getElementById("scores-list");
var submitScoreBtn = document.getElementById("submit-score");
var userInitials = document.getElementById("initials-text");
var finalScore = document.getElementById("final-score");
var recentScore = document.getElementById("score");

var answer = document.getElementsByClassName("answer-btn");
let newChoice1 = document.getElementById("answer-1");
let newChoice2 = document.getElementById("answer-2");
let newChoice3 = document.getElementById("answer-3");
let newChoice4 = document.getElementById("answer-4");

var scoresButton = document.getElementById("scores-btn");




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
        document.getElementById("score").innerHTML = ("Current Score = " + (score += 10));
    } else {
        console.log("incorrect");
        updateTimer()
        time -= 60;
    }

    localStorage.setItem("mostRecentScore", score);

    questionCounter++;

    if (questionCounter >= 0 && questionCounter < 10) {
        getNextQuestion();
    } else {
        gameOver();
    }
}

// Ends the game by clearing the questions container and displaying "Game Over."
function gameOver() {
    document.getElementById("questions-container").innerHTML = "";
    document.getElementById("main-title").textContent = "Game Over";
    renderHighScores();
}


function renderHighScores() {
    highScoreEl.classList.remove("hidden");
    alert("Your Final Score = " + score + "!");
    var initials = prompt("Enter your intials to save your high score:");
    var scoreValue = localStorage.getItem("mostRecentScore");

    localStorage.setItem("User Initials", initials);

    if (initials === "") {
        return;
    }

    var li = document.createElement("li");
    li.textContent = initials + " " + scoreValue;
    scoresEl.appendChild(li);
}


/* 5 minute countdown timer starts when the quiz begins. If the timer runs out
before the user has finished the quiz then the game will be over.*/
const startingMinutes = 5;
var time = startingMinutes * 60;

setInterval(updateTimer, 1000);

function updateTimer() {
    const minutes = Math.floor(time / 60);
    var seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

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
    ,
    {
        question: "It is possible to nest functions in JavaScript.",
        choice1: "A. True",
        choice2: "B. False",
        choice3: "None of the above",
        choice4: "All of the above",
        answer: "A. True"
    }
    ,
    {
        question: "To test for a specific condition use the ___ statement.",
        choice1: "A. If",
        choice2: "B. Switch",
        choice3: "C. For",
        choice4: "D. While",
        answer: "A. If"
    }
    ,
    {
        question: "What is the correct synatx for referring to an external script?",
        choice1: "A. <script href='xxx.js'>",
        choice2: "B. <script src='xxx.js'>",
        choice3: "C. <script type='xxx.js'>",
        choice4: "D. <javascript src='xxx.js>",
        answer: "B. <script src='xxx.js'>"
    }
    ,
    {
        question: "What does the keyword 'this' refer to in JavaScript?",
        choice1: "A. It refers to the previous object",
        choice2: "B. It is a variable that contains a value>",
        choice3: "C. It is a constant that contains a value>",
        choice4: "D. It refers to the current object",
        answer: "D. It refers to the current object"
    }
    ,
    {
        question: "Which method returns the length of a string?",
        choice1: "A. index()",
        choice2: "B. size()",
        choice3: "C. length()",
        choice4: "D. None of the above",
        answer: "C. length()"
    }
    ,
    {
        question: "Which of the following will write 'Hello World' in an alert box?",
        choice1: "A. msgAlert(Hello World);",
        choice2: "B. alert('Hello World');",
        choice3: "C. alert(Hello World);",
        choice4: "D. alertMsg('Hello World');",
        answer: "B. alert('Hello World');"
    }
];

