
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random('hide') - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct) 
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}
const questions = [
    {
        question: 'The behavior of the instances present of a class inside a method is defined by _____',
        answers: [
            { text: 'Method', correct: false },
            { text: 'Classes', correct: true },
            { text: 'Interfaces', correct: false },
            { text: 'Classes and Interfaces', correct: false }
        ]
    },
    {
        question: 'The functions definitions in JavaScript begins with ____',
        answers: [
            { text: 'Identifier type and Parenthesis', correct: false },
            { text: 'Return type and Identifier', correct: false },
            { text: 'Return type, Function keyword, Identifier and Parenthesis', correct: true },
            { text: 'Identifier and Return type', correct: false }
        ]
    },
    {
        question: 'When does the function name become optional in JavaScript?',
        answers: [
            { text: 'When the function is defined as a looping statement', correct: false },
            { text: 'When the function is defined as expressions', correct: true },
            { text: 'When the function is predefined', correct: false },
            { text: 'When the function is called', correct: false }
        ]
    },
    {
        question: 'What is the purpose of a return statemnet in a function?',
        answers: [
            { text: 'Returns the value and continues executing the rest of the statments, if any', correct: false },
            { text: 'Returns the value and stops executing the function', correct: false },
            { text: 'Returns the value and stops executing the function', correct: false },
            { text: 'Stops executing the function and returns the value', correct: true }

        ]
    }
]

// Timer Function
var secondsLeft = 76
var timerInterval
function startTimer() {
    timerInterval = setInterval(function() {
        secondsLeft --
        timer.textContent="Time: " + secondsLeft + "seconds"

        // if time runs out
        if (secondsLeft === 0) {
            clearInterval(timerInterval)
            quizSection.styledisplay = "none"
            initialsSection.styledisplay.display = "inline"
        }
    }, 1000)
    return timerInterval
}

