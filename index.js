const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const question = document.getElementById("question")

const form = document.getElementById("form")

const input = document.getElementById("input")

question.innerText = `What is ${num1} multiply ${num2}?`

const correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));

if(!score) {
    score = 0;
}

form.addEventListener("submit", ()=>{
    const userAns = +input.value

    if(userAns === correctAns) {
        score++
        updateLocalstorage()
    }
    else {
        score--
        updateLocalstorage()
    }
})

function updateLocalstorage() {
    localStorage.setItem("score", JSON.stringify(score))
}

const scoreElement = document.getElementById("score")

scoreElement.innerText = `Score: ${score}`