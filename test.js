// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function getComputerChoice() {
    var computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return 'ROCK';
    } 
    else if (computerChoice === 1) {
        return 'PAPER';
    }
    else if (computerChoice === 2) {
        return 'SCISSORS';
    }
    return 'ERROR'
}

function getPlayerSelection() {
    var playerSelection = prompt('Select \'rock\', \'paper\' or \'scissors\'');
    playerSelection = playerSelection.toUpperCase();
    
    while (playerSelection != 'ROCK' && playerSelection != 'PAPER' && playerSelection != 'SCISSORS') {
        playerSelection = prompt('Please only select from \'rock\', \'paper\' or \'scissors\'');
        playerSelection = playerSelection.toUpperCase();
    }
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (((playerSelection === 'ROCK') && (computerSelection === 'SCISSORS')) || ((playerSelection === 'PAPER') && (computerSelection === 'ROCK')) || ((playerSelection === 'SCISSORS') && (computerSelection === 'PAPER'))) {
        return 'VICTORY!';
    }
    else if (((playerSelection === 'SCISSORS') && (computerSelection === 'ROCK')) || ((playerSelection === 'ROCK') && (computerSelection === 'SCISSORS')) || ((playerSelection === 'PAPER') && (computerSelection === 'SCISSORS')))  {
        return 'YOU LOSE!';
    }
    else if (playerSelection === computerSelection) {
        return 'Draw.';
    }
}

const computerSelection = getComputerChoice();
var playerSelection = getPlayerSelection();
console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));
alert(playRound(playerSelection, computerSelection));

