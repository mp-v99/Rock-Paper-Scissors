/* 
PSEUDOCODE(Yes, after I actually wrote some code already):

LOG Welcome Message for the user

DECLARE Score variables

DECLARE Computer Choice Function
    DECLARE randomNumber that will return 1, 2 or 3
    DECLARE undefined computerChoice variable
    IF randomNumber EQUALS 1 
        computerChoice EQUALS 'Rock'
    ELSE IF randomNumber EQUALS 2
        computerChoice EQUALS 'Paper'
    ELSE
        computerChoice EQUALS 'Scissors'

DECLARE Human Choice Funciton 
    DECLARE humanChoice prompt variable and turn into Upper Case
    IF humanChoice EQUALS ROCK
        RETURN humanChoice EQUALS 'Rock'
    ELSE IF humanChoice EQUALS PAPER
        RETURN humanChoice EQUAL 'Paper'
    ELSE IF humanChoice EQUALS SCISSORS
        RETURN humanChoice EQUALS 'Scissors'
    ELSE
        RETURN Error Message

DECLARE Round Function
    TAKE humanChoice and computerChoice parameters
    IF humanChoice EQUALS computerChoice
        RETURN "It's a tie!"
        
    ELSE IF humanChoice EQUALS Rock && computerChoice EQUALS Paper OR
    humanChoice EQUALS Paper && computerChoice EQUALS Scissors OR
    humanChoice EQUALS Scissors && computerChoice EQUALS Rock 

        RETURN 'AI wins, sorry human. You played humanChoice and the machine played computerChoice'
    ELSE 
        RETURN 'Humanity has won, for now. You played humanChoice and the machine played computerChoice'
*/





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
    } else if (humanChoice === 'SCISSORS' || humanChoice === 'SCISSOR') {
        humanChoice = 'Scissors';
    }
    else {
        alert("Are you sure you wrote rock or paper or scissors?")
    }
    console.log(humanChoice)
}

