'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!'

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let score = 20;
let highScore = 0;
let secretNumber = generateRandomNum();

function generateRandomNum() {
  let num = Math.floor(Math.random() * 20) + 1;
  return num;
}

const displayMeessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const playAgain = function () {
  score = 20;
  secretNumber = generateRandomNum();
  displayMeessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

const playGame = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // no guess input
  if (!guess) {
    displayMeessage('No Number');

    // player wins
  } else if (guess === secretNumber) {
    displayMeessage('Correct Number!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //player makes a guess
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMeessage(guess > secretNumber ? 'Too high...' : 'Too low...');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMeessage('You Lost... Womp!');
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', playGame);

document.querySelector('.again').addEventListener('click', playAgain);
