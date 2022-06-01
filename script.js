let playerScore = document.querySelector(".user-result-score");
let compScore = document.querySelector(".comp-result-score");
let announcement = document.querySelector(".result-announcement")
let gameResult = document.querySelector(".gameResult");

let scorePlayer = 0;
let scoreComp = 0;

const choices = ['Rock', 'Paper', 'Scissors'];

//Selections

//Comp Selection

function compSelection () {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
};

//Player Selection

const btns = document.querySelectorAll("button");

btns.forEach(btn => {
    btn.addEventListener("click", event => {
        let choice = (event.target.id);
        playRound(choice);
    });
});

//What selection beats what

function workResult(user, comp) {

    if (user === comp) {
        announcement.innerText = "Tie!";
    } else if (user === "Rock" && comp === "Scissors" || user === "Paper" && comp === "Rock" || user === "Scissors" && comp === "Paper") {
        announcement.innerText = `You won! ${user} beats ${comp}!`;
        playerScore.textContent = ++scorePlayer;
    } else if (comp === "Rock" && user === "Scissors" || comp === "Paper" && user === "Rock" || comp === "Scissors" && user === "Paper") {
        announcement.innerText = `You lost... ${comp} beats ${user}.`;
        compScore.textContent = ++scoreComp;
    }

    //Winning & Losing

    if (scorePlayer === 5) {
        gameResult.textContent = "You're the first the 5! Congratulations!";
        gameOver();
    } else if (scoreComp === 5) {
        gameResult.textContent = "Oh no! The computer got to 5. You lost.";
        gameOver();
    }
};

//Start a Round

function playRound (selection) {
    const compChoice = compSelection();
    workResult(selection, compChoice);
};

//Game Over & Reset

function gameOver() {
    btns.forEach(btn => {
        btn.setAttribute("disabled", "");
        btn.setAttribute("style", "cursor:not-allowed");
    });
    const reset = document.createElement("button");
        reset.classList.add("reset");
        reset.setAttribute("onClick", "location.reload()");
        reset.innerText = "Try Again?";
        document.body.appendChild(reset);
};