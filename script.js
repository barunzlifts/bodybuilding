const quizContainer = document.querySelector('.quiz-container');
const quizForm = document.getElementById('quiz-form');
const submitButton = document.querySelector('button[type="submit"]');
const resultDiv = document.getElementById('result');
const replayButton = document.getElementById('replay');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');

// Array di domande (esempi adatti a un pubblico giovane)
const domande = [
    {
        domanda: "Qual è il miglior esercizio per rafforzare i bicipiti?",
        risposte: ["Flessioni", "Squat", "Curl con manubri", "Trazioni"],
        rispostaCorretta: 2
    },
    // ... altre domande (evita termini troppo tecnici e focalizzati sulla forma fisica generale)
];

let currentQuestion = 0;
let score = 0;

function createQuestions() {
    domande.forEach((domanda, index) => {
        const label = document.createElement('label');
        label.textContent = domanda.domanda;

        const select = document.createElement('select');
        select.name = `question${index}`;

        domanda.risposte.forEach((risposta) => {
            const option = document.createElement('option');
            option.value = risposta;
            option.textContent = risposta;
            select.appendChild(option);
        });

        quizForm.appendChild(label);
        quizForm.appendChild(select);
        quizForm.appendChild(document.createElement('br'));
    });

    submitButton.disabled = false;
    totalQuestionsElement.textContent = domande.length;
}

function checkAnswers() {
    const userAnswers = new FormData(quizForm);
    domande.forEach((domanda, index) => {
        if (userAnswers.get(`question${index}`) === domanda.risposte[domanda.rispostaCorretta]) {
            score++;
        }
    });

    scoreElement.textContent = score;

    if (score >= 17) {
        resultDiv.querySelector('#message').textContent = "Complimenti! Sei un vero esperto di bodybuilding!";
    } else {
        resultDiv.querySelector('#message').textContent = "Continua così! L'allenamento è la chiave del successo.";
    }

    quizForm.style.display = 'none';
    resultDiv.style.display = 'block';
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    checkAnswers();
});

replayButton.addEventListener('click', () => {
    quizForm.style.display = 'block';
    resultDiv.style.display = 'none';
    score = 0;
    currentQuestion = 0;
    quizForm.reset();
});

createQuestions();
