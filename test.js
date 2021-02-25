let page = document.querySelector('body')

class QuestionObject {
    constructor(a, ...b) {
        this.a = a;
        this.b = b;
    }

    construct() {
        console.log(this.a, this.b)
        for( let i in this.b) {
            let status = this.b[i].correct;
            let item = '<li>' + this.b[i].answer + '<input type="button" value="' + i + '"' + status +'</li>'
            page.innerHTML += item
            console.log(status)
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

console.log(question1.construct())

