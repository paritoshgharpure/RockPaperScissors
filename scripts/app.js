const playerChoice = document.getElementById('player_choice');
const computerChoice = document.getElementById('computer_choice');
const resultPlace = document.getElementById('result_place');

const rockButton = document.getElementById('rock_button');
const paperButton = document.getElementById('paper_button');
const scissorsButton = document.getElementById('scissors_button');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'YOU WON';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let gameResult = '';
let isGameRunning = false;
let playerSelection;
let computerSelection;

const getComputerChoice = function () {
  let ran = Math.random();
  if (ran < 0.34) {
    return ROCK;
  } else if (ran < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const startMatch = function (pSelection) {
  computerSelection = getComputerChoice();
  gameResult = getWinner(playerSelection, computerSelection);
  if (gameResult === RESULT_DRAW){
    resultPlace.style.color = "yellow";
  } else if (gameResult === RESULT_PLAYER_WINS){
    resultPlace.style.color = "green";
  } else if (gameResult === RESULT_COMPUTER_WINS){
    resultPlace.style.color = "red";
  }
  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;
  resultPlace.textContent = gameResult;
};

const getWinner = function (pChoice, cChoice) {
  if (pChoice === cChoice) {
    return RESULT_DRAW;
  } else if (
    (pChoice === ROCK && cChoice === SCISSORS) ||
    (pChoice === PAPER && cChoice === ROCK) ||
    (pChoice === SCISSORS && cChoice === PAPER)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

rockButton.addEventListener('click', function () {
  playerSelection = ROCK;
  startMatch(playerSelection);
});

paperButton.addEventListener('click', function () {
  playerSelection = PAPER;
  startMatch(playerSelection);
});

scissorsButton.addEventListener('click', function () {
  playerSelection = SCISSORS;
  startMatch(playerSelection);
});
