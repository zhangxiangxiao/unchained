'use strict';

const scores = [
  document.querySelector('#score--0'),
  document.querySelector('#score--1'),
];
const currents = [
  document.querySelector('#current--0'),
  document.querySelector('#current--1'),
];
const players = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

scores[0].textContent = 0;
scores[1].textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    currents[activePlayer].textContent = currentScore;
  } else {
    // Switch to next player
    currentScore = 0;
    currents[activePlayer].textContent = currentScore;
    players[activePlayer].classList.remove('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    players[activePlayer].classList.add('player--active');
  }
});

btnHold.addEventListener('click', function () {
  // 1. Add current score to active player's score
  scores[activePlayer].textContent =
    Number(scores[activePlayer].textContent) + currentScore;

  // 2. Check if player's score is >= 100
  if (Number(scores[activePlayer].textContent) >= 100) {
    // Finish the game
    players[activePlayer].classList.add('player--winner');
    players[activePlayer].classList.remove('player--active');
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else {
    // Switch to next player
    currentScore = 0;
    currents[activePlayer].textContent = currentScore;
    players[activePlayer].classList.remove('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    players[activePlayer].classList.add('player--active');
  }
});

btnNew.addEventListener('click', function () {
  // Reset scores
  scores[0].textContent = 0;
  scores[1].textContent = 0;
  currents[0].textContent = 0;
  currents[1].textContent = 0;

  // Reset active player
  players[activePlayer].classList.remove('player--active');
  activePlayer = 0;
  players[activePlayer].classList.add('player--active');

  // Reset current score
  currentScore = 0;

  // Reset winner
  players[0].classList.remove('player--winner');
  players[1].classList.remove('player--winner');

  // Reset buttons
  btnRoll.disabled = false;
  btnHold.disabled = false;
});
