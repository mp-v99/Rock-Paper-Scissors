// count score and rounds 

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 1;

// icon moves

let playerChoice;
let computerChoice;

// define player name

let playerName = prompt(`What's your name?`);
const playerCard = document.querySelector('#player_name');
playerCard.textContent = playerName;

// grab nodes from the DOM

const playButton = document.querySelectorAll('.play_button');
const result = document.querySelector('#result');
const playerScoreCard = document.querySelector('#player_score');
const computerScoreCard = document.querySelector('#computer_score');
const playerMove = document.querySelector('#player_move');
const computerMove = document.querySelector('#computer_move');
const resultParagraph = document.createElement('p');
result.appendChild(resultParagraph);

// moves icons

const rockPlayerMove = document.createElement('img');
const paperPlayerMove = document.createElement('img');
const scissorsPlayerMove = document.createElement('img');

const rockComputerMove = document.createElement('img');
const paperComputerMove = document.createElement('img');
const scissorsComputerMove = document.createElement('img');

rockPlayerMove.src = 'rps_pictures/rock_pointing_right.png';
rockPlayerMove.alt = 'Rock Pointing Right';
paperPlayerMove.src = 'rps_pictures/paper_pointing_right.png';
paperPlayerMove.alt = 'Paper Pointing Right'
scissorsPlayerMove.src = 'rps_pictures/scissors_pointing_right.png';
scissorsPlayerMove.alt = 'Scissors Pointing Right';

rockComputerMove.src = 'rps_pictures/rock_pointing_left.png';
rockComputerMove.alt = 'Rock Pointing Left';
paperComputerMove.src = 'rps_pictures/paper_pointing_left.png';
paperComputerMove.alt = 'Paper Pointing Left'
scissorsComputerMove.src = 'rps_pictures/scissors_pointing_left.png';
scissorsComputerMove.alt = 'Scissors Pointing Left';

// event listener to trigger game 

playButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        playerChoice = getPlayerChoice(btn);
        computerChoice = getComputerChoice();
        Round(playerChoice, computerChoice, roundsPlayed);
        printPlayerMoves(playerChoice);
        printComputerMoves(computerChoice);
        roundsPlayed++
        setTimeout(()=> announceFinalResult(), 1500);
    }) 
});

// functions

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (3) + 1);
    if (randomNumber === 1) {
        return computerChoice = 'rock';
    } else if (randomNumber === 2) {
        return computerChoice = 'paper';
    } else {
        return computerChoice = 'scissors';
    }
}

// rewriting the getPlayerChoice function to base the playerChoice in an event rather than a prompt

 function getPlayerChoice(btn) {
    if(btn.getAttribute('id') === 'rock_button') {
        return playerChoice ='rock';
    } else if (btn.getAttribute('id') === 'paper_button') {
        return playerChoice = 'paper';
    } else if (btn.getAttribute('id') === 'scissors_button') {
        return playerChoice = 'scissors';
    }    
 }




function Round(playerChoice, computerChoice, iteration) {
    
    if(playerChoice === computerChoice) {
        resultParagraph.textContent = `Round: ${iteration}: Its a tie.`;
    }
    else if (playerChoice === 'rock' && computerChoice === 'paper' ||
        playerChoice === 'paper' && computerChoice === 'scissors' ||
        playerChoice === 'scissors' && computerChoice === 'rock'
    )
    {
        resultParagraph.textContent = `Round: ${iteration}: AI wins.`;
        console.log(playerChoice, computerChoice);
        computerScore++;
    }
    else if (computerChoice === 'rock' && playerChoice === 'paper' ||
        computerChoice === 'paper' && playerChoice === 'scissors' ||
        computerChoice === 'scissors' && playerChoice === 'rock'
    ) 
    {
        resultParagraph.textContent = `Round: ${iteration}: ${playerName} wins`;
        console.log(playerChoice, computerChoice);
        playerScore++;
    }
    setTimeout(() => eraseParagraph(), 2000);
    setTimeout(() => updateScores(), 1100);
}


function eraseParagraph() {
    resultParagraph.textContent = '';
};

function updateScores() {
    playerScoreCard.textContent = `Score: ${playerScore}`;
    computerScoreCard.textContent = `Score: ${computerScore}`
};

function playerVictory() {
    resultParagraph.textContent = `${playerName} has won!`;
};

function computerVictory() {
    resultParagraph.textContent = `AI has beat ${playerName}`;
}

function tie() {
    resultParagraph.textContent = `It's a tie, no victory.`
}

function announceFinalResult() {
    if (roundsPlayed === 6) {
        roundsPlayed = 1;
        if (playerScore > computerScore) {
            setTimeout(() => playerVictory(), 1000);
            setTimeout(() => eraseParagraph(), 3000);
            playerScore = 0;
            computerScore = 0;
        }
        else if (computerScore > playerScore) {
            setTimeout(() => computerVictory(), 1000);
            setTimeout(() => eraseParagraph(), 3000);
            playerScore = 0;
            computerScore = 0;
        }
        else if (playerScore === computerScore) {
            setTimeout(() => tie(), 1000);
            setTimeout(() => eraseParagraph(), 3000);
            playerScore = 0;
            computerScore = 0;
        }
        setTimeout(() => updateScores(), 3200);
    }
    else {return};
}

function printPlayerMoves(playerChoice) {
    if (playerChoice === 'rock'){
        playerMove.appendChild(rockPlayerMove);
        setTimeout(()=> {playerMove.removeChild(rockPlayerMove)}, 2000);
    }
    else if (playerChoice === 'paper') {
        playerMove.appendChild(paperPlayerMove);
        setTimeout(()=> {playerMove.removeChild(paperPlayerMove)}, 2000);
    }
    else if (playerChoice === 'scissors') {
        playerMove.appendChild(scissorsPlayerMove);
        setTimeout(()=> {playerMove.removeChild(scissorsPlayerMove)}, 2000);
    }
}

function printComputerMoves(computerChoice) {
    if (computerChoice === 'rock'){
        computerMove.appendChild(rockComputerMove);
        setTimeout(()=> {computerMove.removeChild(rockComputerMove)}, 2000);
    }
    else if (computerChoice === 'paper') {
        computerMove.appendChild(paperComputerMove);
        setTimeout(()=> {computerMove.removeChild(paperComputerMove)}, 2000);
    }
    else if (computerChoice === 'scissors') {
        computerMove.appendChild(scissorsComputerMove);
        setTimeout(()=> {computerMove.removeChild(scissorsComputerMove)}, 2000);
    }
}