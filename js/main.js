/* START QUIZ BUTTON */

let startBtn = document.querySelector('.startBtn')
startBtn.addEventListener('click', () => {
    startQuiz()
})

let startQuiz = () => {

    /* HTML ELEMENT SELECTED */

    let score = document.querySelector('.score');
    let timer = document.querySelector('.timer');
    let questionBox = document.querySelector('.question_box');
    let answerBox = document.querySelector('.answer_box');




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

    /* QUESTIONS AND ANSWERS */

 
    let radioBtn = document.createElement("input");
    radioBtn.setAttribute("type", "radio");

    questionBox.innerHTML = "What is Javascript?"
    answerBox.innerHTML = "";

    answerBox.appendChild(radioBtn);
}


/* QUESTION DATA STUCTURE */

let questionArray = [
    {
        "question" : "What is Javascript?"
    },
    {
        "question" : "What is a Lexical Environment?"
    },
    {
        "question" : "What is a arrow function>"
    },
    {
        "question" : "What is the difference between let and var"
    }
]

let answerArray = [
    {
        "answer" : [
            "A", "B", "C"
        ]
    },
    {
        "answer" : [
            "A", "B", "C"
        ]
    },
    {
        "answer" : [
            "A", "B", "C"
        ]
    },
    {
        "answer" : [
            "A", "B", "C"
        ]
    }
]


let buildQuestion = (qus, ans) => {
    
    qus.forEach((i) => {
        console.log(i.question)
    })

    ans.forEach((i) => {
        i.answer.forEach((j) => {
            console.log(j)
        })
    })

   
}

console.log(buildQuestion(questionArray, answerArray))













