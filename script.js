var startButton = document.getElementById("play-btn")
var questionContainer = document.getElementById("question-container")

var shuffledQuestions;
var currentQuestionIndex;

startButton.addEventListener("click", startGame)

// Start the game by displaying the first question with answer selections and next button
function startGame() {
    console.log("Started")
    shuffleQuestions = questions.sort();
    questionContainer.classList.remove("hide")
    setNextQuestion()
    
    
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    
}

function selectAnswer () {

}

// Need to set up Question and Answer Indexes
var questions = [
    {
        question: "Which answer does NOT describe Javascript?",
        answers: [
            {text: "Enables dynamically updated content", correct: false},
            {text: "It is a scripting language", correct: false},
            {text: "It is a layer of standard web technology", correct: false},
            {text: "It is a markup language that structures web content", correct: true}
        ]
    }
]