/* HTML ELEMENT SELECTED */

let score = document.querySelector('.score');
let timer = document.querySelector('.timer');
let questionBox = document.querySelector('.question_box');
let answerBox = document.querySelector('.answer_box');

/* START QUIZ BUTTON */

let startBtn = document.querySelector('.startBtn')
startBtn.addEventListener('click', () => {
    timerFunction(90)
    quizInit(questions[0])
})

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

    let radioBtnA = document.createElement("input");
    radioBtnA.setAttribute("type", "radio");

    let radioBtnB = document.createElement("input");
    radioBtnB.setAttribute("type", "radio");

    let radioBtnC = document.createElement("input");
    radioBtnC.setAttribute("type", "radio");

    let ul = document.createElement("ul");
    ul.setAttribute("class", "list");
    answerBox.appendChild(ul)

    let choice1 = document.createElement("li");
    let answer1 = document.createTextNode(data.answers.a);
    choice1.appendChild(answer1);
    ul.appendChild(choice1).appendChild(radioBtnA).addEventListener("click", () => {
        answerBox.innerHTML = "";
        quizInit2(questions[1])
        console.log('a')
    })

    let choice2 = document.createElement("li");
    let answer2 = document.createTextNode(data.answers.b);
    choice2.appendChild(answer2);
    ul.appendChild(choice2).appendChild(radioBtnB).addEventListener("click", () => {
        answerBox.innerHTML = "";
        quizInit2(questions[1])
        console.log('a')
    })

    let choice3 = document.createElement("li");
    let answer3 = document.createTextNode(data.answers.c);
    choice3.appendChild(answer3);
    ul.appendChild(choice3).appendChild(radioBtnC).addEventListener("click", () => {
        answerBox.innerHTML = "";
        quizInit2(questions[1])
        console.log('a')
    })


}

let quizInit2 = (data) => {

    let radioBtnA = document.createElement("input");
    radioBtnA.setAttribute("type", "radio");

    let radioBtnB = document.createElement("input");
    radioBtnB.setAttribute("type", "radio");

    let radioBtnC = document.createElement("input");
    radioBtnC.setAttribute("type", "radio");

    let ul = document.createElement("ul");
    ul.setAttribute("class", "list");
    answerBox.appendChild(ul)

    let choice1 = document.createElement("li");
    let answer1 = document.createTextNode(data.answers.a);
    choice1.appendChild(answer1);
    ul.appendChild(choice1).appendChild(radioBtnA).addEventListener("click", () => {
        answerBox.innerHTML = "";
        quizInit2(questions[1])
        console.log('a')
    })

    let choice2 = document.createElement("li");
    let answer2 = document.createTextNode(data.answers.b);
    choice2.appendChild(answer2);
    ul.appendChild(choice2).appendChild(radioBtnB).addEventListener("click", () => {
        answerBox.innerHTML = "";
        quizInit2(questions[1])
        console.log('a')
    })

    let choice3 = document.createElement("li");
    let answer3 = document.createTextNode(data.answers.c);
    choice3.appendChild(answer3);
    ul.appendChild(choice3).appendChild(radioBtnC).addEventListener("click", () => {
        answerBox.innerHTML = "";
        quizInit2(questions[1])
        console.log('a')
    })
}



