// script.js

const quizData = [
    {
        question: "¿Cuál es la capital de Perú?",
        options: ["Arequipa", "Cusco", "Lima", "Trujillo"],
        correct: 2 // Índice de la respuesta correcta (0-basado)
    },
    {
        question: "¿Qué planeta es conocido como el Planeta Rojo?",
        options: ["Marte", "Júpiter", "Venus", "Saturno"],
        correct: 0
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Atlántico", "Índico", "Ártico", "Pacífico"],
        correct: 3
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        options: ["Mario Vargas Llosa", "Gabriel García Márquez", "Julio Cortázar", "Jorge Luis Borges"],
        correct: 1
    },
    {
        question: "¿Cuál es el metal más abundante en la corteza terrestre?",
        options: ["Hierro", "Cobre", "Aluminio", "Oro"],
        correct: 2
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

function buildQuiz() {
    const output = [];
    quizData.forEach((currentQuestion, questionNumber) => {
        const options = [];
        for (let i = 0; i < currentQuestion.options.length; i++) {
            options.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${i}">
                    ${currentQuestion.options[i]}
                </label>`
            );
        }

        output.push(
            `<div class="question">
                <h2>${questionNumber + 1}. ${currentQuestion.question}</h2>
                <div class="options">${options.join('')}</div>
            </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.options');
    let score = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer == currentQuestion.correct) {
            score++;
            // Opcional: Resaltar la respuesta correcta
            answerContainer.querySelector(`label:nth-child(${parseInt(userAnswer) + 1})`).style.backgroundColor = '#d4edda'; // Verde
        } else {
            // Opcional: Resaltar la respuesta incorrecta del usuario y la correcta
            if (userAnswer !== undefined) { // Si el usuario seleccionó algo
                answerContainer.querySelector(`label:nth-child(${parseInt(userAnswer) + 1})`).style.backgroundColor = '#f8d7da'; // Rojo
            }
            answerContainer.querySelector(`label:nth-child(${currentQuestion.correct + 1})`).style.backgroundColor = '#fff3cd'; // Amarillo (correcta no seleccionada)
        }
    });

    resultsContainer.innerHTML = `Obtuviste ${score} de ${quizData.length} preguntas correctas.`;
    resultsContainer.classList.remove('hidden'); // Muestra los resultados
}

// Construye el quiz al cargar la página
buildQuiz();

// Agrega el evento al botón de enviar
submitButton.addEventListener('click', showResults);