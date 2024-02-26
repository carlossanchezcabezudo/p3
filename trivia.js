let currentQuestionIndex = 0;
let attempts = 0;
let wins = 0;

const triviaData = [
    {
        question: "¿En qué año comenzó la Segunda Guerra Mundial?",
        options: ["1939", "1940", "1941", "1942"],
        correctAnswer: "1939"
    },
    {
        question: "¿Quién pintó 'La noche estrellada'?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Río Amazonas", "Río Nilo", "Río Yangtsé", "Río Mississippi"],
        correctAnswer: "Río Amazonas"
    },
    {
        question: "¿Cuál es el país más grande del mundo por área terrestre?",
        options: ["Rusia", "Canadá", "Estados Unidos", "China"],
        correctAnswer: "Rusia"
    },
    {
        question: "¿Quién escribió 'El principito'?",
        options: ["Antoine de Saint-Exupéry", "J.K. Rowling", "F. Scott Fitzgerald", "George Orwell"],
        correctAnswer: "Antoine de Saint-Exupéry"
    },
    {
        question: "¿En qué país se encuentra la Torre Eiffel?",
        options: ["Francia", "Italia", "España", "Alemania"],
        correctAnswer: "Francia"
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        options: ["Júpiter", "Saturno", "Neptuno", "Urano"],
        correctAnswer: "Júpiter"
    },
    {
        question: "¿Quién fue el primer presidente de Estados Unidos?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        correctAnswer: "George Washington"
    },
    {
        question: "¿Qué animal es el símbolo de la paz?",
        options: ["Paloma", "Tortuga", "Perro", "Elefante"],
        correctAnswer: "Paloma"
    },
    {
        question: "¿Quién fue el pintor del famoso cuadro 'La persistencia de la memoria'?",
        options: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci"],
        correctAnswer: "Salvador Dalí"
    },
    {
        question: "¿En qué año llegó el hombre a la Luna por primera vez?",
        options: ["1969", "1971", "1965", "1973"],
        correctAnswer: "1969"
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Océano Pacífico", "Océano Atlántico", "Océano Índico", "Océano Antártico"],
        correctAnswer: "Océano Pacífico"
    },
    {
        question: "¿Cuál es la montaña más alta del mundo?",
        options: ["Monte Everest", "Monte Kilimanjaro", "Monte Aconcagua", "Monte McKinley"],
        correctAnswer: "Monte Everest"
    },
    {
        question: "¿Cuál es el hueso más largo del cuerpo humano?",
        options: ["Fémur", "Tibia", "Húmero", "Radio"],
        correctAnswer: "Fémur"
    },
    {
        question: "¿Quién fue el primer hombre en pisar la Luna?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Yuri Gagarin"],
        correctAnswer: "Neil Armstrong"
    },
    {
        question: "¿Cuál es el metal más caro del mundo?",
        options: ["Rodio", "Oro", "Platino", "Rutenio"],
        correctAnswer: "Rodio"
    },
    {
        question: "¿Quién es el autor de la famosa obra 'Hamlet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "¿Cuál es el animal terrestre más grande del mundo?",
        options: ["Elefante africano", "Jirafa", "Hipopótamo", "Rinoceronte"],
        correctAnswer: "Elefante africano"
    },
    {
        question: "¿Cuál es el idioma más hablado del mundo?",
        options: ["Chino mandarín", "Inglés", "Español", "Hindi"],
        correctAnswer: "Chino mandarín"
    },
    {
        question: "¿Quién fue el primer presidente de la República de Argentina?",
        options: ["Bernardino Rivadavia", "Juan Domingo Perón", "Bartolomé Mitre", "Julio Argentino Roca"],
        correctAnswer: "Bernardino Rivadavia"
    }
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');

displayQuestion();

document.getElementById('nextBtn').addEventListener('click', function() {
    currentQuestionIndex++;
    attempts++;
    displayQuestion();
});

document.getElementById('backBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function displayQuestion() {
    if (currentQuestionIndex < triviaData.length) {
        const question = triviaData[currentQuestionIndex];
        questionElement.textContent = question.question;

        optionsElement.innerHTML = '';
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', function() {
                checkAnswer(option, question.correctAnswer);
            });
            optionsElement.appendChild(button);
        });
    } else {
        alert(`Has completado el Trivial! Aciertos: ${wins}/${attempts}`);
    }
}

function checkAnswer(selectedAnswer, correctAnswer) {
    attempts++;
    if (selectedAnswer === correctAnswer) {
        wins++;
        document.getElementById('result').textContent = "¡Respuesta Correcta! 🎉";
        displayNextQuestion(); // Llama a la función para mostrar la siguiente pregunta
    } else {
        document.getElementById('result').textContent = "Respuesta Incorrecta 😢";
    }

    document.getElementById('attempts').textContent = attempts;
    document.getElementById('wins').textContent = wins;
}

function displayNextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

