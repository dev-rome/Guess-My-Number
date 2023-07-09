'use strict';

const numberEl = document.querySelector('.number');
const messageEl = document.querySelector('.message');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const bodyEl = document.querySelector('body');

let secretNumber, score, highscore;

function initializeGame() {
  document.querySelector('.guess').value = '';
  secretNumber = generateRandomNumber();
  score = 20;
  highscore = 0;
  scoreEl.textContent = score;
  numberEl.textContent = '?';
  numberEl.style.width = '15rem';
  bodyEl.style.backgroundColor = '#222';
  messageEl.textContent = 'Start guessing...';
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * 20) + 1;
}

function displayMessage(text) {
  messageEl.textContent = text;
}

function updateScore(newScore) {
  score = newScore;
  scoreEl.textContent = score;
}

function updateHighscore() {
  highscore = score;
  highscoreEl.textContent = highscore;
}

function checkGuess() {
  const guessEl = Number(document.querySelector('.guess').value);

  if (!guessEl) {
    displayMessage('Please enter a number!');
  } else if (guessEl === secretNumber) {
    numberEl.textContent = secretNumber;
    displayMessage('Correct Number!');
    bodyEl.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';

    if (score > highscore) {
      updateHighscore();
    }
  } else {
    const message = guessEl > secretNumber ? 'Too High!' : 'Too Low!';

    if (score > 1) {
      displayMessage(message);
      updateScore(score - 1);
    } else {
      scoreEl.textContent = 0;
      displayMessage('Game Over!');
    }
  }
}

checkBtnEl.addEventListener('click', checkGuess);

againBtnEl.addEventListener('click', initializeGame);

// Initialize the game
initializeGame();
