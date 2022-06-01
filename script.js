let playerScore = document.querySelector(".user-result-score");
let compScore = document.querySelector(".comp-result-score");
let announcement = document.querySelector(".result-announcement")
let winner = document.querySelector(".winner");

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
        playerScore.textContent ++;
    } else if (comp === "Rock" && user === "Scissors" || comp === "Paper" && user === "Rock" || comp === "Scissors" && user === "Paper") {
        announcement.innerText = `You lost... ${comp} beats ${user}.`;
        compScore.textContent ++;
    }
    
    ifWinner();
};

//Start a Round

function playRound (selection) {
    const compChoice = compSelection();
    workResult(selection, compChoice);
};

//Winner & Loser

function ifWinner() {
    if (Number(playerScore) === 5) {
        winner.innerText = "You're the first the 5!\n Congratulations!";
    } 
}