// Función para mostrar solo el contenido de la sección seleccionada
function toggleContent(sectionId) {
    const allContents = document.querySelectorAll('.content');
    allContents.forEach(content => content.style.display = 'none');

    const selectedContent = document.getElementById(sectionId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

// Función para alternar entre modo claro y oscuro
function toggleDarkMode() {
    const body = document.body;
    const modeText = document.getElementById('modeText');

    body.classList.toggle('dark-mode');
    modeText.textContent = body.classList.contains('dark-mode') ? 'Modo Oscuro' : 'Modo Claro';
}

// Función para calcular el puntaje del cuestionario
function calculateScore(quizId, correctAnswers, resultId) {
    const quiz = document.getElementById(quizId);
    const answers = quiz.querySelectorAll('input[type="radio"]:checked');
    let score = 0;

    // Comparar respuestas seleccionadas con respuestas correctas
    answers.forEach((answer, index) => {
        if (answer.value === correctAnswers[index]) {
            score++;
        }
    });

    // Mostrar el resultado del puntaje en formato "X/5"
    const resultText = `${score}/${correctAnswers.length}`;
    const resultContainer = document.getElementById(resultId);
    
    // Crear o actualizar el elemento de resultado
    if (!resultContainer) {
        const resultDisplay = document.createElement('p');
        resultDisplay.id = resultId;
        resultDisplay.textContent = `Resultado: ${resultText}`;
        quiz.appendChild(resultDisplay);
    } else {
        resultContainer.textContent = `Resultado: ${resultText}`;
    }
}
