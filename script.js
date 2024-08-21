const quizContainer = document.querySelector('.quiz-container');
const quizForm = document.getElementById('quiz-form');
const submitButton = document.querySelector('button[type="submit"]');
const resultDiv = document.getElementById('result');
const replayButton = document.getElementById('replay');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');

// Domande più adatte a un pubblico giovane e focalizzate sul benessere
const domande = [
    {
        domanda: "Qual è il frutto migliore per una merenda sana?",
        risposte: ["Patatine fritte", "Cioccolato", "Mela", "Bibita gassata"],
        rispostaCorretta: 2
    },
    {
        domanda: "Qual è l'attività fisica più divertente?",
        risposte: ["Guardare la TV", "Giocare ai videogiochi", "Andare in bicicletta", "Mangiare pizza"],
        rispostaCorretta: 2
    },
    // ... altre domande
];

// ... (resto del codice identico)
