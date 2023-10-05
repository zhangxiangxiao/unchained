'use strict';

const $ = function (selector) {
  return document.querySelector(selector);
};

/* console.log($('.message').textContent);
$('.message').textContent = 'Correct Number!';
console.log($('.message').textContent);
$('.number').textContent = 13;
$('.score').textContent = 10;

$('.guess').value = 23;
console.log($('.guess').value);*/

/* const x = function () {
  console.log(23);
}; */

let number = Math.trunc(Math.random() * 20) + 1;

// $('.number').textContent = number;
let score = 20;
$('.score').textContent = score;

let highScore = 0;

$('.check').addEventListener('click', function () {
  const guess = Number($('.guess').value);
  console.log(guess, typeof guess);
  if (score <= 0) {
    $('.message').textContent = 'You Lost the Game!';
    return;
  }
  if (guess < 1 || guess > 20) {
    $('.message').textContent = 'Invalid Number!';
  } else if (guess === number) {
    $('.message').textContent = 'Correct Number!';
    $('body').style.backgroundColor = '#60b347';
    $('.number').style.width = '30rem';
    $('.number').textContent = number;
    highScore = score > highScore ? score : highScore;
    $('.highscore').textContent = highScore;
  } else if (guess > number) {
    $('.message').textContent = 'Too High!';
    score--;
    $('.score').textContent = score;
  } else if (guess < number) {
    $('.message').textContent = 'Too Low!';
    score--;
    $('.score').textContent = score;
  }
});

$('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  $('.score').textContent = score;
  $('.message').textContent = 'Start guessing...';
  $('.guess').value = '';
  $('body').style.backgroundColor = '#222';
  $('.number').style.width = '15rem';
  $('.number').textContent = '?';
});
