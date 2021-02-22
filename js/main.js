/* HTML ELEMENT SELECTED */

let score = document.querySelector('.score');
let timer = document.querySelector('.timer');
let questionBox = document.querySelector('.question_box');
let answerBox = document.querySelector('.answer_box')




/* START QUIZ BUTTON */

let startBtn = document.querySelector('.startBtn')
startBtn.addEventListener('click', () => {
    startQuiz()
})

let startQuiz = () => {

    /* TIMER */

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
    
    timerFunction(10);


    /* QUESTION OBJECT */ 

    /* ONE IDEA? */

    let questions = [
        {
            "question1" : "What is Javascript?",
        },
        {
            "answers1" : answerChoices1 = [
                ""
            ]
        }
    ]


    /* QUESTIONS AND ANSWERS */

 
    let radioBtn = document.createElement("input");
    radioBtn.setAttribute("type", "radio");

    questionBox.innerHTML = "What is Javascript?"
    answerBox.innerHTML = "";

    answerBox.appendChild(radioBtn);
}












