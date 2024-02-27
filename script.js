'use-strict';

// Selecting Elements
const playerBtns = document.querySelectorAll('.game-item');
const compBtn = document.querySelector('.comp-item');
const resetBtn = document.querySelector('.reset-btn');
const resultEl = document.querySelector('.res');
const yourNotiEl = document.querySelector('.your-noti');
const compNotiEl = document.querySelector('.comp-noti');

// Initial Value
const values = ['rock', 'paper', 'scissors'];
let yourChoice = 'rock';
let compChoice = values[Math.trunc(Math.random() * 3)];

// Functions
const generateCompChoice = () => {
  compChoice = values[Math.trunc(Math.random() * 3)];
};

const getResult = (yourChoice, compChoice) => {
  if (yourChoice == compChoice) return 0;
  else if (
    (yourChoice == 'rock' && compChoice == 'paper') ||
    (yourChoice == 'paper' && compChoice == 'scissors') ||
    (yourChoice == 'scissors' && compChoice == 'rock')
  )
    return -1;
  else return 1;
};

// Add Event Handlers
for (const btn of playerBtns) {
  btn.addEventListener('click', e => {
    generateCompChoice();
    yourChoice = e.target.alt;
    yourNotiEl.textContent = `Your choice: ${yourChoice}.`;
    compNotiEl.textContent = `Computer\'s choice: ${compChoice}.`;
    compBtn.src = `item/${compChoice}.png`;
    let res = getResult(yourChoice, compChoice);
    if (res == 0) {
      resultEl.textContent = "It's a tie!";
    } else if (res == -1) {
      resultEl.textContent = 'You lose!';
    } else {
      resultEl.textContent = 'You win!';
    }
  });
}

resetBtn.addEventListener('click', () => {
  yourNotiEl.textContent = 'Pick one!';
  compNotiEl.textContent = 'Waiting for your choice...';
  resultEl.textContent = '';
  generateCompChoice();
});
