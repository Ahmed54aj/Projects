'use strict';

// Selecting elements in two different ways
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
       activePlayer = activePlayer === 0 ? 1 : 0;
       currentScore = 0;
       player0El.classList.toggle('player--active');
       player1El.classList.toggle('player--active');
};
let scores, currentScore, activePlayer, playing;


// initialization function
const startGame = function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
// start of the game
startGame();


// rolling dice functionality

btnRoll.addEventListener('click', function() {
    if(playing) {
    // start by generating random dice roll 
    const dice = Math.trunc(Math.random() * 6) + 1;
    // display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // check dice, if true. switch the other player
    if (dice !== 1) { 
        //add dice to the current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`
          ).textContent = currentScore; //change later
    } else {
       // switch to next player 
    switchPlayer();
    }
}
});

btnHold.addEventListener('click', function() {
    if(playing) {
    //add score
    scores[activePlayer] += currentScore;
// scores[1] = scpres[1] + currentScore
document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
      console.log(scores);
// check if player is at 100
if(scores[activePlayer] >= 100) {
    //finish game
    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
} else {
    // if not switch to other player
    switchPlayer();
}}


});
 
// new game functionality

btnNew.addEventListener('click', startGame);