const quizContainer = document.querySelector('.quiz-container');
const quizForm = document.getElementById('quiz-form');
const submitButton = document.querySelector('button[type="submit"]');
const resultDiv = document.getElementById('result');
const replayButton = document.getElementById('replay');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');

// Domande per il quiz
const domande = [
    {
        domanda: "Qual è l'esercizio fondamentale per allenare il petto?",
        risposte: ["Panca piana", "Squat", "Stacco da terra", "Curl con manubri"],
        rispostaCorretta: 0
    },
    {
        domanda: "Qual è il macronutriente principale per la crescita muscolare?",
        risposte: ["Grassi", "Carboidrati", "Proteine", "Fibre"],
        rispostaCorretta: 2
    },
    // Aggiungi altre domande qui (fino a 20)
    // ...
];

function creaQuiz() {
    domande.forEach((domanda, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        
        const domandaTitle = document.createElement('h3');
        domandaTitle.textContent = `${index + 1}. ${domanda.domanda}`;
        questionElement.appendChild(domandaTitle);
        
        const selectElement = document.createElement('select');
        selectElement.name = `question-${index}`;
        domanda.risposte.forEach((risposta, i) => {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = risposta;
            selectElement.appendChild(option);
        });
        questionElement.appendChild(selectElement);
        
        quizForm.appendChild(questionElement);
    });
    submitButton.disabled = false;
}

// Controlla le risposte e calcola il punteggio
function controllaRisposte(event) {
    event.preventDefault();
    let score = 0;

    domande.forEach((domanda, index) => {
        const rispostaSelezionata = parseInt(quizForm[`question-${index}`].value);
        if (rispostaSelezionata === domanda.rispostaCorretta) {
            score++;
        }
    });

    mostraRisultato(score);
}

// Mostra il risultato
function mostraRisultato(score) {
    quizContainer.style.display = 'none';
    resultDiv.style.display = 'block';
    
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = domande.length;

    const messageElement = document.getElementById('message');
    if (score >= 17) {
        messageElement.textContent = "Complimenti, hai vinto!";
    } else {
        messageElement.textContent = "Non hai ottenuto il punteggio necessario. Riprova!";
    }
}

// Riprova il quiz
function riprovaQuiz() {
    window.location.reload();
}

quizForm.addEventListener('submit', controllaRisposte);
replayButton.addEventListener('click', riprovaQuiz);

creaQuiz();
