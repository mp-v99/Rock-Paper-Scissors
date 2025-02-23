console.log("Hello, and welcome to the epic ROCK-PAPER-SCISSORS Game!!!")


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
