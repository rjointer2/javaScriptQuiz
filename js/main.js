/* HTML ELEMENT SELECTED */

let score = document.querySelector('.score');
let timer = document.querySelector('.timer');
let questionBox = document.querySelector('.question_box');
let answerBox = document.querySelector('.answer_box');

let highScoresBtn = document.createElement('button');
let highScoreBtnText = document.createTextNode('View High Scores');

answerBox.appendChild(highScoresBtn).appendChild(highScoreBtnText)

highScoresBtn.addEventListener('click', ()=> {
    questionBox.innerHTML = "";
    answerBox.innerHTML = "";

    questionBox.innerHTML = "";
    answerBox.innerHTML = localStorage.getItem("name") + localStorage.getItem("score");
})


let time = 90

/* BUTTONS */

let starBtn = document.querySelector('.startBtn').addEventListener('click', () => {
    console.log("init Quiz")
    init()
    questionBox.innerHTML = question1.question
})

let init = () => {
    question1.buildQuestion()
    timerFunction(time)
}




/* TIMER AND TIMER FUNCTION */

let timerFunction = (seconds) => {
    setTimeout(() => {
        if (seconds > 0) {
            time--
            timer.innerHTML = time
            timerFunction(time);
        } else {
            timer.innerHTML = "Time is up!"
        }
    }, 1000)
} 






/* INIT NEXT QUESTION  */

let counter = 0;

let pagination = () => {
    counter++
    console.log(counter)

    if(counter === 1) {
        console.log("Next Question Inited")
        question2.buildQuestion()
        questionBox.innerHTML = question2.question;
    }

    if(counter === 2) {
        console.log("Next Question Inited")
        question3.buildQuestion()
        questionBox.innerHTML = question3.question;
    }

    if(counter === 3) {
        console.log("quiz completed");
        score.innerHTML = time
        points = time
        

        answerBox.innerHTML = "The quiz is done";

        questionBox.innerHTML = "Your score is " + time + " Enter your name here ";

        let form = document.createElement('input');
        form.setAttribute("type", "text");
        questionBox.appendChild(form)

        let formBtnText = document.createTextNode("Submit");
        let formBtn = document.createElement("button");
        formBtn.appendChild(formBtnText);
        formBtn.addEventListener('click', () => {
            localStorage.setItem("name", form.value)
            localStorage.setItem("score", points)
        })

        questionBox.appendChild(formBtn);




        /* RESET COUNTER TO 0 */

        time = 0;

        
        



    }
    return counter
}

/* SCOREBOARD */

       /*  let storeName = localStorage.setItem("name", input);
        let storeScore = localStorage.setItem("score", time);
 */


/* QUESTION OBJECT CONSTRUCTOR */

class QuestionObject {
    constructor(question, answerA, answerB, answerC, correctAnswer) {
        this.question = question;
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.correctAnswer = correctAnswer;
    }

    buildQuestion() {
        questionBox.innerHTML = "";
        answerBox.innerHTML = "";

        /* CREATE BUTTON */

        let radioBtnA = document.createElement("input");
        radioBtnA.setAttribute("type", "radio");

        let radioBtnB = document.createElement("input");
        radioBtnB.setAttribute("type", "radio");

        let radioBtnC = document.createElement("input");
        radioBtnC.setAttribute("type", "radio");

        /* CREATE UL */

        let ul = document.createElement("ul");
        ul.setAttribute("class", "list");
        answerBox.appendChild(ul)

        /* CREATE LI */

        let choice1 = document.createElement("li");
        let answer1 = document.createTextNode(this.answerA);
        choice1.appendChild(answer1);
        ul.appendChild(choice1).appendChild(radioBtnA).addEventListener("click", () => {
            let option = "A";
            this.isCorrect(option);
            pagination()
        })    

        let choice2 = document.createElement("li");
        let answer2 = document.createTextNode(this.answerB);
        choice2.appendChild(answer2);
        ul.appendChild(choice2).appendChild(radioBtnB).addEventListener("click", () => {
            let option = "B"
            this.isCorrect(option)
            pagination()
        })  

        let choice3 = document.createElement("li");
        let answer3 = document.createTextNode(this.answerC);
        choice3.appendChild(answer3);
        ul.appendChild(choice3).appendChild(radioBtnC).addEventListener("click", () => {
            let option = "C"
            this.isCorrect(option)
            pagination()
        })  
    }

    isCorrect(ans) {
        if(this.correctAnswer === ans) {
            
        } else {
            time += -20
        }
    }
}






 /* QUESTIONS */

let question1 = new QuestionObject(
    "What is Javascript?",
    "A Coffee Brand",
    "The Script from the Play Java",
    "A Programming Language",
    "B"
);

let question2 = new QuestionObject(
    "What does DOM mean?",
    "Document Object Model",
    "Domino's Pizza",
    "Don't Overuse Models",
    "A"
);

let question3 = new QuestionObject(
    "What is the KISS rule in programming?",
    "Kiss someone",
    "Keep It Super Serious",
    "Keep It Stupid Simple",
    "C"
);



