let userScore = 0;
let compScore = 0;
let winner = '';

const choices = ['rock', 'paper', 'scissors'];

//Play a Round
function compPlay(choice) {
    let compSelection = choices[Math.floor(Math.random()*choices.length)];
    let playerSelection = choice.toLowerCase();
    
    //Selections

    if (playerSelection === compSelection) {
        return "Draw!";
    } else if (playerSelection === 'paper' && compSelection === 'rock' || playerSelection === 'scissors' && compSelection === 'paper' || playerSelection === 'rock' && compSelection === 'scissors') {
        userScore ++;
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${compSelection.charAt(0).toUpperCase() + compSelection.slice(1).toLowerCase()}.`;
    } else if (compSelection === 'paper' && playerSelection === 'rock' || compSelection === 'scissors' && playerSelection === 'paper' || compSelection === 'rock' && playerSelection === 'scissors') {
        compScore ++;
        return  `You lost! ${compSelection.charAt(0).toUpperCase() + compSelection.slice(1).toLowerCase()} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}.`;
    }
}



console.log(compPlay('rock'));
console.log(compScore, userScore);