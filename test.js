let page = document.querySelector('body')

class QuestionObject {
    constructor(a, ...b) {
        this.a = a;
        this.b = b;
    }

    construct() {
        
        for( let i in this.b) {
            let status = this.b[i].correct;

            const liText = document.createTextNode(this.b[i].answer)
            const li = document.createElement('li');
            li.appendChild(liText);

            const btn = document.createElement('input');
            btn.type = "radio";
            btn.value = status;

            btn.addEventListener('click', (e) => {
                if(btn.value == "true" ) {
                    console.log('correct')
                } else {
                    console.log('incorrect')
                }
            })

            li.appendChild(btn)
            page.appendChild(li)
            
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