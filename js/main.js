/* HTML ELEMENT SELECTED */

let score = document.querySelector('.score');
let timer = document.querySelector('.timer');
let questionBox = document.querySelector('.question_box');
let answerBox = document.querySelector('.answer_box');
let init = document.querySelector('.startBtn');

let counter = 0;

/* TIMER & TIMER FUNCTION */

let time = 90;

let timerFunction = (t) => {
    setTimeout(() => {
        if( t > 0 ) {
            time--
            timer.innerHTML = time
            timerFunction(time)
        } else {
            timer.innerHTML = "Time is up!"
        }
    }, 1000);
}


/* QUESTION DATA STRUCTURE */

class QuestionObject {
    constructor(a, ...b) {
        this.a = a;
        this.b = b;
    }

    construct() {

        let question = this.a;
        let liQuestion = document.createElement('li')
        let liQuestionText = document.createTextNode(question);
        liQuestion.appendChild(liQuestionText)

        questionBox.appendChild(liQuestion)
        
        for( let i in this.b) {
            let question = this.a;
            let liQuestion = document.createElement('li')
            let liQuestionText = document.createTextNode(question);
            liQuestion.appendChild(liQuestionText)

            let status = this.b[i].correct;

            const liText = document.createTextNode(this.b[i].answer)
            const li = document.createElement('li');
            li.appendChild(liText);

            const btn = document.createElement('input');
            btn.type = "radio";
            btn.value = status;

            btn.addEventListener('click', (e) => {
                pagination()
                if(btn.value == "true" ) {
                    console.log('correct')
                } else {
                    console.log('incorrect')
                }
            })

            li.appendChild(btn)
            answerBox.appendChild(li)
            
        }
        
    }
}

let question1 = new QuestionObject("What is Javascript? ",
    {
        "answer": "A Coffee Brand ",
        "correct": false
    },
    {
        "answer": "The Script from the Play Java  ",
        "correct": false
    },
    {
        "answer": "A Programming Language ",
        "correct": true
    }
)

let question2 = new QuestionObject("What does DOM mean? ",
    {
        "answer": "Document Object Model ",
        "correct": true
    },
    {
        "answer": "Domino's Pizza ",
        "correct": false
    },
    {
        "answer": "Don't Overuse Models ",
        "correct": false
    }
)

let question3 = new QuestionObject("What is the KISS rule in programming? ",
    {
        "answer": "Kiss someone ",
        "correct": false
    },
    {
        "answer": "Keep It Super Serious  ",
        "correct": false
    },
    {
        "answer": "Keep It Stupid Simple ",
        "correct": true
    }
)

let question4 = new QuestionObject("What is a lexical enviroment? ",
    {
        "answer": "A environment for a lexus ",
        "correct": false
    },
    {
        "answer": "the js engine construct that holds identifier-variable mapping",
        "correct": true
    },
    {
        "answer": "the environment the let variable is written ",
        "correct": false
    }
)

let question5 = new QuestionObject('What does 2 + "2" equal in Javascript?',
    {
        "answer": "22 ",
        "correct": false
    },
    {
        "answer": "NaN ",
        "correct": false
    },
    {
        "answer": "4 ",
        "correct": true
    }
)

let question6 = new QuestionObject("What is the difference between let and var? ",
    {
        "answer": "it let's you deicde it's variable ",
        "correct": false
    },
    {
        "answer": "Trick Question! There isn't no question. ",
        "correct": false
    },
    {
        "answer": "var is globally scope and let isn't ",
        "correct": true
    }
)



/* INIT QUIZ */
let clearPage = () => {
    questionBox.innerHTML = '';
    answerBox.innerHTML = '';
}

init.addEventListener('click', () => {
    clearPage()
    timerFunction(time)
    question1.construct()
})

/* PAGINATION */

let arr = [question1,
    question2,
    question3,
    question4,
    question5,
    question6
]

let pagination = () => {

    if( counter > counter - 1 ) {
        counter++
        clearPage()
        arr[counter].construct()
        if( counter === 5 ) {
            console.log("test")
            questionBox.innerHTML = "Congratz you finished the quiz! Here's your score! " + time
            answerBox.innerHTML = "great"
        }
    } 
}
