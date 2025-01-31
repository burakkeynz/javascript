'use strict';
let secretNumber, score;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const init = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
};

init();
