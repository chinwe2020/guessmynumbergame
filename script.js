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
let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;

const log = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // no guess input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  
  // player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

  //guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'You Lost... Womp!';
        document.querySelector('.score').textContent = 0;
    }

  //guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = 'Too Low...';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
          document.querySelector('.message').textContent = 'You Lost... Womp!';
          document.querySelector('.score').textContent = 0;
      }
  }
};

document.querySelector('.check').addEventListener('click', log);

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});