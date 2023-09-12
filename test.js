// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const results = document.getElementById("results");

let playerVictories = 0;
let computerVictories = 0;

let numberOfWins = 3;


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

/* function getPlayerSelection() {
    var playerSelection = prompt('Select \'rock\', \'paper\' or \'scissors\'');
    playerSelection = playerSelection.toUpperCase();
    
    while (playerSelection != 'ROCK' && playerSelection != 'PAPER' && playerSelection != 'SCISSORS') {
        playerSelection = prompt('Please only select from \'rock\', \'paper\' or \'scissors\'');
        playerSelection = playerSelection.toUpperCase();
    }
    return playerSelection;
} */

function playRound(playerSelection, computerSelection) {
    if (((playerSelection === 'ROCK') && (computerSelection === 'SCISSORS')) || ((playerSelection === 'PAPER') && (computerSelection === 'ROCK')) || ((playerSelection === 'SCISSORS') && (computerSelection === 'PAPER'))) {
        //alert('You won the round');
        console.log('won turn')
        return 'VICTORY!';
    }
    else if (((playerSelection === 'SCISSORS') && (computerSelection === 'ROCK')) || ((playerSelection === 'ROCK') && (computerSelection === 'PAPER')) || ((playerSelection === 'PAPER') && (computerSelection === 'SCISSORS')))  {
        //alert('You lost the round');
        console.log('lost turn')
        return 'YOU LOSE!';
    }
    else if (playerSelection === computerSelection) {
        //alert('You drew the round');
        console.log('drew turn')
        return 'Draw.';
    }
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function game(playerSelection) {

    //var numberOfWins = prompt('RPS. How many victories wins the game?','3');
    //var numberOfWins = parseInt(numberOfWins);
    

    var computerSelection = getComputerChoice();
    /* var playerSelection = getPlayerSelection(); */
    var winner = playRound(playerSelection, computerSelection);

    if (winner === 'VICTORY!') {
        playerVictories++;
        console.log('Player wins: ', playerVictories);
    }
    else if (winner === 'YOU LOSE!') {
        computerVictories++;
        console.log('Computer wins: ', computerVictories);
    }

    results.innerHTML = "Player wins: " + playerVictories + "<br>" + "Computer wins: " + computerVictories;

    if (playerVictories >= numberOfWins) {
        results.textContent.innerHTML += "<br><br>Congratulations! <br><br>YOU WIN! Reload the page to play again.";
        disableButtons();
        console.log('Congratulations! YOU WIN!');
        //alert('Congratulations! YOU WIN!');
    }
    else if (computerVictories >= numberOfWins) { 
        results.innerHTML += "<br><br>Sorry! YOU LOSE! <br><br>Reload the page to play again.";
        disableButtons();
        console.log('Sorry! YOU LOSE!');
        //alert('Sorry! YOU LOSE!');
    }
}

rockButton.addEventListener('click', function() {game('ROCK');});
paperButton.addEventListener('click', function() {game('PAPER');});
scissorsButton.addEventListener('click', function() {game('SCISSORS');});




