const quizData = [
    {
        question: "Apa ibukota Indonesia?",
        options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
        correctAnswer: "Jakarta"
    },
    {
        question: "Berapakah hasil dari 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    // Tambahkan pertanyaan dan jawaban lainnya sesuai kebutuhan
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "Kuis Selesai!";
    optionsContainer.innerHTML = "";
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("back-to-home").style.display = "block";
    scoreElement.textContent = `Skor Akhir: ${score} dari ${quizData.length}`;
    scoreElement.style.display = "block";
}

function submitAnswer() {
    const selectedOption = document.querySelector("button:focus");
    if (selectedOption) {
        selectAnswer(selectedOption.textContent);
    }
}

function backToHome() {
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById("submit-btn").style.display = "block";
    document.getElementById("back-to-home").style.display = "none";
    scoreElement.style.display = "none";

    loadQuestion();
}

loadQuestion();
