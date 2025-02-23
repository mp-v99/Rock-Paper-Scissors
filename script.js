console.log("Hello, and welcome to the epic ROCK-PAPER-SCISSORS Game!!!")

let userScore = 0;
let computerScore = 0;

getComputerChoice();
getHumanChoice();


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (3) + 1);
    let compChoice;
    if (randomNumber === 1) {
        return compChoice = 'Rock';
    } else if (randomNumber === 2) {
            return compChoice = 'Paper';
    } else {
        return compChoice = 'Scissors';
    }
}

function getHumanChoice() {
    let humanChoice =   prompt("Choose Rock, Paper or Scissor!").toUpperCase();

    if(humanChoice === 'ROCK') {
        humanChoice = 'Rock';
    } else if (humanChoice === 'PAPER') {
        humanChoice = 'Paper';
    } else {
        humanChoice = 'Scissors';
    }
    console.log(humanChoice)
}

