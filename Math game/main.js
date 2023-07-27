let correctAnswer = 0;
let currentOperation = '';

function generateProblem() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);

    let operation = Math.floor(Math.random() * 3);

    switch(operation) {
        case 0:  // Addition
            correctAnswer = num1 + num2;
            currentOperation = '+';
            break;
        case 1:  // Subtraction
            correctAnswer = num1 - num2;
            currentOperation = '-';
            break;
        case 2:  // Multiplication
            correctAnswer = num1 * num2;
            currentOperation = '×';
            break;
    }

    document.getElementById('question').innerText = `What is ${num1} ${currentOperation} ${num2}?`;
}

function checkAnswer(userAnswer) {
    if(userAnswer == correctAnswer) {
        return true;
    } else {
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('answerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let userAnswer = document.getElementById('answer').value;
        let result = document.getElementById('result');
        if(checkAnswer(userAnswer)) {
            result.innerText = 'Correct! Well done 🎉';
            result.animate([
                // keyframes
                { transform: 'scale(1)', opacity: 1, offset: 0 },
                { transform: 'scale(1.2)', opacity: 1, offset: 0.5 },
                { transform: 'scale(1)', opacity: 1, offset: 1 }
            ], {
                // timing options
                duration: 500,
                iterations: 2,
                easing: 'ease-in-out',
            });
        } else {
            result.innerText = `Sorry that was incorrect. The correct answer was ${correctAnswer}.`;
        }
        document.getElementById('answer').value = ''; 
        generateProblem();
    });
});

generateProblem(); 
