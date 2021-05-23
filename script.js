function computerPlay() {
    let selection = Math.floor(Math.random() *3 ) + 1;
    switch(selection) {
        case 1:
        selection = "Scissors";
        break;
        
        case 2:
        selection = "Rock";
        break;

        case 3:
        selection = "Paper";
        break;
    }
    return selection;
}

let playerScore = 0;
let computerScore = 0;

//score works, but can't get the resetScore to work, will figure it out later
function resetScore(){
    if (playerScore == 5 || computerScore == 5){
        playerScore * 0;
        computerScore * 0;
    }
    else {return};
}

function addPlayerScore() {
    resetScore();
    ++playerScore
};

function addComputerScore(){
    resetScore();
    ++computerScore;
}

function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    resetScore();
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        alert("Computer chose Paper, you lose!")
        addComputerScore();
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        alert("Computer chose Scissors, you win!")
        addPlayerScore()
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        alert("Computer chose Rock, you win!")
        addPlayerScore()
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        alert("Computer chose Scissors, you lose!")
        addComputerScore()
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        alert("Computer chose Paper, you win!")
        addPlayerScore()
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        alert("Computer chose Rock, you lose!")
        addComputerScore()
    } else {
        alert("Computer chose " + computerSelection + ", it's a draw!")
    }
    console.log(playerScore);
    console.log(computerScore);
};

const rockbtn = document.querySelector('#rockcontainer');
rockbtn.addEventListener('click', () => {
  playRound('', 'Rock');
});

const paperbtn = document.querySelector('#papercontainer');
paperbtn.addEventListener('click', () => {
  playerSelection = 'Paper';
  playRound('', 'Paper');
});

const scissorbtn = document.querySelector('#scissorcontainer');
scissorbtn.addEventListener('click', () => {
  playerSelection = 'Scissors';
  playRound('', 'Scissors');
});