/* HTML ELEMENT SELECTED */

let score = document.querySelector('.score');
let timer = document.querySelector('.timer');
let questionBox = document.querySelector('.question_box');
let answerBox = document.querySelector('.answer_box');

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

    timerFunction(90)

    /* QUESTIONS AND ANSWERS */

    quizInit(questions)
    
}


/* QUESTION DATA STUCTURE */

const questions = [
    {
      question: "What is Javascript?",
      answers: {
        a: "A Script From the Play Java",
        b: "A Programming Language",
        c: "A Coffee Brand"
      }
    },
    {
      question: "What does DOM mean?",
      answers: {
        a: "Document Object Model",
        b: "Domino's Pizza",
        c: "Don't Overuse Models"
      }
    },
    {
      question: "What is the KISS principle?",
      answers: {
        a: "Kiss someone",
        b: "Keep It Super Serious",
        c: "Keep It Stupid Simple"
      }
    }
];

let quizInit = (data) => {

    let ul = document.createElement("ul");
    ul.setAttribute("class", "list");
    answerBox.appendChild(ul)

    let choice1 = document.createElement("li");
    let answer1 = document.createTextNode(data[0].answers.a);
    choice1.appendChild(answer1);
    ul.appendChild(choice1);

    let choice2 = document.createElement("li");
    let answer2 = document.createTextNode(data[0].answers.b);
    choice2.appendChild(answer2);
    ul.appendChild(choice2);

    let choice3 = document.createElement("li");
    let answer3 = document.createTextNode(data[0].answers.c);
    choice3.appendChild(answer3);
    ul.appendChild(choice3)

}













