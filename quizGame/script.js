// DOM ELEMENTS

const startScreen = document.getElementById("start-screen")
const quizScreen = document.getElementById("quiz-screen")
const resultScreen = document.getElementById("result-screen")
const startButton = document.getElementById("start-btn")
const questionText = document.getElementById("question-text")
const answerContainer = document.getElementById("answers-container")
const currentQuestionSpan = document.getElementById("current-question")
const totalQuestionsSpan = document.getElementById("total-questions")
const scoreSpan = document.getElementById("score")
const finalScoreSpan = document.getElementById("final-score")
const maxScoreSpan = document.getElementById("max-score")
const resultMessage = document.getElementById("result-message")
const restartButton = document.getElementById("restart-btn")
const progressBar = document.getElementById("progress")

const number_of_questions = 5;
let quizQuestions = [];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

totalQuestionsSpan.textContent = number_of_questions;
maxScoreSpan.textContent = number_of_questions;

// Event listener
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function getQuestions() {
    // quizQuestions = [];
     // Get random questions from the question bank each time the game starts
    let i = 0;
    while (i < number_of_questions) {
        let index = Math.floor((Math.random() * Questions.length));
        if (quizQuestions.includes(Questions[index])) {
            continue
        };
        quizQuestions[i] = Questions[index];
        i++
    }
    
}

function startQuiz() {
    
    getQuestions();

    // restart vars
    currentQuestionIndex = 0
    scoreSpan.textContent = 0

    startScreen.classList.remove("active")
    quizScreen.classList.add("active")

    showQuestion()
}


function showQuestion() {
    // reset state
    answerDisabled = false
    
    const currentQuestion = quizQuestions[currentQuestionIndex]

    currentQuestionSpan.textContent = currentQuestionIndex + 1

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%"

    questionText.textContent = currentQuestion.question

    answerContainer.innerHTML = "";

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add("answer-btn");

        // dataset : stores custom data
        button.dataset.correct = answer.correct

        button.addEventListener("click", selectAnswer)

        answerContainer.appendChild(button)
    })
}


function selectAnswer(event) {
    if (answerDisabled) return
    answerDisabled = true
    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true" 

    Array.from(answerContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        } else if (button == selectedButton) {
            button.classList.add("incorrect");
        }
    });
    
    if (isCorrect) {
        score++
        scoreSpan.textContent = score;
    }

    setTimeout(() => {
        currentQuestionIndex++

        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion()
        } else {
            showResults()
        }
    }, 1000);
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;

    const percentage = (score/quizQuestions.length) * 100;
    
    if (percentage === 100) {
        resultMessage.textContent = "Perfect! You're a genius!";
    } else if (percentage >= 80) {
        resultMessage.textContent = "Great job! You know your stuff!";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Good effort! Keep learning!";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Not bad! Try again to improve!";
    } else {
        resultMessage.textContent = "Keep studying! You'll get better!";
    }
}

function restartQuiz() {
    resultScreen.classList.remove("active");

    startQuiz();
}