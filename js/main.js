/* HTML ELEMENT SELECTED */

let score = document.querySelector('.score');
let timer = document.querySelector('.timer');
let questionBox = document.querySelector('.question_box');
let answerBox = document.querySelector('.answer_box')

let timerFunction = (seconds) => {
    const timeLeft = seconds;
    setTimeout(() => {
        if (timeLeft > 0) {
            timerFunction( timer.innerHTML = seconds - 1);
            console.log(timeLeft + " seconds is left")
        } else {
            timer.innerHTML = "Time is up!"
        }
    }, 1000)
} 

timerFunction(10)
