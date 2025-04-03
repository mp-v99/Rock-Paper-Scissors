
let userScore = 0;
let computerScore = 0;
let errorMessage = false;
let playerName = prompt(`What's your name?`);
const playerChoice = document.createElement('img')
playerCard.textContent = playerName;


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
    let humanChoice =   prompt("Choose Rock, Paper or Scissors!").toUpperCase();

    if(humanChoice === 'ROCK') {
        return 'Rock';
    } else if (humanChoice === 'PAPER') {
        return 'Paper';
    } else if (humanChoice === 'SCISSORS' || humanChoice === 'SCISSOR') {
        return 'Scissors';
    }

}

function Round(humanChoice, computerChoice, iteration) {
    
    if(humanChoice === computerChoice) {
        console.log(`It's a tie!!!!! Round # ${iteration}`)
    }
    else if (humanChoice === 'Rock' && computerChoice === 'Paper' ||
        humanChoice === 'Paper' && computerChoice === 'Scissors' ||
        humanChoice === 'Scissors' && computerChoice === 'Rock'
    )
    {
        console.log(`AI wins Round # ${iteration}`)
        computerScore++;
    }
    else if (computerChoice === 'Rock' && humanChoice === 'Paper' ||
        computerChoice === 'Paper' && humanChoice === 'Scissors' ||
        computerChoice === 'Scissors' && humanChoice === 'Rock'
    ) 
    {
        console.log(`Humanity wins Round # ${iteration}`)
        userScore++;
    }
    else {
        alert(`Looks like a typo. Try that again, you are at Round # ${iteration}`)
        errorMessage = true;
    }
}

function playGame() {

    for (let i = 1; i <= 5; i++) {

        Round(getHumanChoice(), getComputerChoice(), i);

        if(errorMessage) {
            i--
            errorMessage = false;
        }
        else if (i === 5 && userScore > computerScore) {
            alert('Congratulations Human, you have saved the world.')
        }
        else if (i === 5 && userScore < computerScore) {
            alert(`Oopsie, AI has won. Unless the sun farts, then we get to have a second chance!`)
        }
    }
}

