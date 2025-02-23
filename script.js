/* 
PSEUDOCODE(Yes, after I actually wrote some code already):

LOG Welcome Message for the user

DECLARE Score variables
DECLARE falsy error message;

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
        RETURN Error Message AND retry the round 

DECLARE Round Function
    TAKE humanChoice and computerChoice parameters

    IF errorMessage EQUALS true 
        SUBTRACT 1 of the errormessage 
        MAKE errorMessage falsy again
    ELSE IF humanChoice EQUALS computerChoice
        RETURN "It's a tie!"

    ELSE IF humanChoice EQUALS Rock && computerChoice EQUALS Paper OR
    humanChoice EQUALS Paper && computerChoice EQUALS Scissors OR
    humanChoice EQUALS Scissors && computerChoice EQUALS Rock 

        RETURN 'AI wins, sorry human. You played humanChoice and the machine played computerChoice'
    ELSE 
        RETURN 'Humanity has won, for now. You played humanChoice and the machine played computerChoice'

RUN the Round function in a loop of five iterations
    IF 5 iterations have occurred AND humanScore is GREATER THAN computerScore 
        RETURN 'Humanity has won!'
    ELSE IF 5 iterations have occurred AND humanScore is LOWER THAN computerScore
        RETURN 'AI won'
    ELSE 
        RETURN 'WTF happened lol'
*/





alert("Hello, and welcome to the epic ROCK-PAPER-SCISSORS Game!!!")

let userScore = 0;
let computerScore = 0;
let errorMessage = false;

playGame();

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