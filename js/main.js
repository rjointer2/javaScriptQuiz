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
                    console.log('correct');
                    answerBox.innerHTML = "<h2>CORRECT</h2>"
                } else {
                    time += -10
                    console.log('incorrect');
                    answerBox.innerHTML = "<h2>WRONG</h2>"
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
        "correct": true
    },
    {
        "answer": "NaN ",
        "correct": false
    },
    {
        "answer": "4 ",
        "correct": false
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

/* RESET QUIZ AND SAVE DATA */

let reset = () => {
    let formBtnText = document.createTextNode("Back to Quiz?");
    let formBtn = document.createElement("button");
    formBtn.appendChild(formBtnText);
    answerBox.appendChild(formBtn);
    formBtn.addEventListener('click', () => {
        location.reload()
    })
}

/* PAGINATION */

let arr = [question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    null
]


let pagination = () => {

    setTimeout(() => {


        if( counter < 5 ) {
            counter++
            console.log(counter)
            clearPage()
            arr[counter].construct()
        } else {
            console.log("test")
            clearPage()
            let points = time
            let save = () => {
                let form = document.createElement('input');
                let formBtnText = document.createTextNode("Submit");
                let formBtn = document.createElement("button");
                form.setAttribute("type", "text");
                answerBox.appendChild(form);
                formBtn.appendChild(formBtnText);
                answerBox.appendChild(formBtn);
                formBtn.addEventListener('click', () => {
                    localStorage.setItem("name", form.value)
                    localStorage.setItem("score", points)
                    location.reload()
                })
            }
    
            if( time < 10 ) {
                questionBox.innerHTML = "Congratz you finished the quiz! Here's your score! " + time + " <br><br>Javscript is tough and you will meet some tough paths. It's important to keep trying and learning!<br><br> Add your name to save your score! " 
            }
    
            if( time < 20 ) {
                questionBox.innerHTML = "Congratz you finished the quiz! Here's your score! " + time + " <br><br>Javascript is tough, but you just have to practice!<br><br> Add your name to save your score! " 
            }
    
            if( time > 30 ) {
                questionBox.innerHTML = "Congratz you finished the quiz! Here's your score! " + time + " <br><br>Nice try, but you can improve!<br><br> Add your name to save your score! " 
            }
    
            if( time > 40) {
                questionBox.innerHTML = "Congratz you finished the quiz! Here's your score! " + time + " <br><br>Good job, you did good!<br><br> Add your name to save your score! " 
            }
    
            if( time > 65) {
                questionBox.innerHTML = "Congratz you finished the quiz! Here's your score! " + time + " <br><br>Impressive, your pretty clever (ツ)!<br><br> Add your name to save your score! " 
            }
    
            if( time > 80) {
                questionBox.innerHTML = "SCORE => " + points + " :: IF ON THIS PAGE THIS IS FOR TESTING BY THE WEBMASTER OR YOUR A CHEATER ¯\_(ツ)_/¯"
            }
            answerBox.innerHTML = "Reset the Quiz to score higher or view the curent high score "
            save()

            timer.innerHTML = "Time's up!"
        }

    },800)
}


/* VIEW HIGHSCORES */

let highScoresBtn = document.createElement('button');
let highScoreBtnText = document.createTextNode('View High Scores');
answerBox.appendChild(highScoresBtn).appendChild(highScoreBtnText);

highScoresBtn.addEventListener('click', ()=> {
    questionBox.innerHTML = "";
    answerBox.innerHTML = "";

    questionBox.innerHTML = "Most Recent Score! Can you do better?";
    answerBox.innerHTML = localStorage.getItem("name") + " " +localStorage.getItem("score") + "<br><br>";
    reset()
})
