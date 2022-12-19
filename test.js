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
        alert('You won the round');
        return 'VICTORY!';
    }
    else if (((playerSelection === 'SCISSORS') && (computerSelection === 'ROCK')) || ((playerSelection === 'ROCK') && (computerSelection === 'SCISSORS')) || ((playerSelection === 'PAPER') && (computerSelection === 'SCISSORS')))  {
        alert('You lost the round');
        return 'YOU LOSE!';
    }
    else if (playerSelection === computerSelection) {
        alert('You drew the round');
        return 'Draw.';
    }
}

function game() {
    alert('Let\'s play RPS!');
    var numberOfWins = prompt('First to how many victories wins the game?','5');
    var numberOfWins = parseInt(numberOfWins);

    var playerVictories = 0;
    var computerVictories = 0;
    
    while (playerVictories < numberOfWins && computerVictories < numberOfWins) {
        var computerSelection = getComputerChoice();
        var playerSelection = getPlayerSelection();
        var winner = playRound(playerSelection, computerSelection);
        if (winner === 'VICTORY!') {
            playerVictories++;
            console.log('Player wins: ', playerVictories);
        }
        else if (winner === 'YOU LOSE!') {
            computerVictories++;
            console.log('Computer wins: ', computerVictories);
        }
    }

    if (playerVictories > computerVictories) {
        console.log('Congratulations! YOU WIN!');
        alert('Congratulations! YOU WIN!');
    }
    else if (playerVictories < computerVictories) { 
        console.log('Sorry! YOU LOSE!');
        alert('Sorry! YOU LOSE!');
    }
}

game();


