'use strict';

let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNum = content => {
  document.querySelector('.number').textContent = content;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number!');

    // When guess is correct
  } else if (guess === secretNum) {
    displayMessage('Correct number');
    displayNum(secretNum);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// When guess is reset stuff
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  displayNum('?');

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
