const questions = [
    {
        question: " 1. What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: " 2.What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "3. Who painted the Mona Lisa?",
        options: ["Vincent Van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correct: 1
    },
    {
        question: "4. Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1
    },
    {
        question: "5.What is the largest mammal?",
        options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const scoreValue = document.getElementById("score-value");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;

    Array.from(optionsContainer.children).forEach((button, index) => {
        button.style.pointerEvents = "none";
        if (index === correctIndex) {
            button.style.backgroundColor = "#28a745";
        } else if (index === selectedIndex) {
            button.style.backgroundColor = "#dc3545";
        }
    });

    if (selectedIndex === correctIndex) {
        score++;
    }

    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.style.display = "none";
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.style.display = "none";
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";
    scoreElement.style.display = "block";
    scoreValue.textContent = `${score} / ${questions.length}`;
}

nextButton.addEventListener("click", nextQuestion);

loadQuestion();
