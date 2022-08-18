'use strict';

// document.querySelector('.message').textContent = `🎉 correct number !`;
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value =10

// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage(`No number!⛔`) 

    // When user wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    // score++;
    // document.querySelector('.score').textContent = score;
    
    document.querySelector('body').style.backgroundColor = '#03fc6f';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? `📈 It's Too High!` : `📉 It's Too Low!`; 
        displayMessage(guess > secretNumber ? `📈 It's Too High!` : `📉 It's Too Low!`)
    } else {
      // document.querySelector('.message').textContent = `💥 Game Over`;
      displayMessage(`💥 Game Over`)
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff002f';
    }
  }

  // when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = `📈 It's Too High!`;
  //   } else {
  //     document.querySelector('.message').textContent = `💥 Game Over`;
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#ff002f';
  //   }
  // }

  // // When guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = `📉 It's Too Low!`;
  //   } else {
  //     document.querySelector('.message').textContent = `💥 Game Over`;
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#ff002f';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // document.querySelector('.message').textContent = ' Start guessing ...';
  displayMessage(' Start guessing ...')
  document.querySelector('.score').textContent = score;
  // document.querySelector('.highscore').textContent = 0;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = NaN;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
