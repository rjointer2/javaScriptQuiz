/* HTML ELEMENT SELECTED */

let score = document.querySelector('.score');
let timer = document.querySelector('.timer');
let questionBox = document.querySelector('.question_box');
let answerBox = document.querySelector('.answer_box');

/* BUTTONS */

let starBtn = document.querySelector('.startBtn').addEventListener('click', () => {
    console.log("init Quiz")
    init()
})

/* QUESTION DATA STUCTURE */

class QuestionObject {
    constructor(question, answerA, answerB, answerC, correctAnswer) {
        this.question = question;
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.correctAnswer = correctAnswer;
    }
    buildQuestion1() {

    }
}

let question1 = new QuestionObject(
    "What is Javascript?",
    "A Coffee Brand",
    "The Script from the Play Java",
    "A Programming Language",
    "B"
    )

let init = () => {
    console.log(question1)
}


timer.innerHTML = 0;

let timerFunction = (seconds) => {
    const timeLeft = seconds;
    setTimeout(() => {
        if (timeLeft > 0) {
            timerFunction( timer.innerHTML = seconds - 1);
        } else {
            timer.innerHTML = "Time is up!"
        }
    }, 1000)
} 



