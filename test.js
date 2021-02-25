class QuestionObject {
    constructor(a, ...b) {
        this.a = a;
        this.b = b;
    }

    construct() {
        console.log(this.a, this.b)
        
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

console.log(question1.construct())