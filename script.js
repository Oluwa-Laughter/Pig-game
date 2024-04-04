"use strict";
// Selecting Elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const player1El = document.querySelector(".player--1");
// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;
// Rolling The dice
btnRoll.addEventListener("click", function () {
  // 1. Generate a random dice Roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);

  // 2. Display the Dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for Dice rolled 1: if true switch to next player
  if (dice !== 1) {
    // add dice to current player score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // Switch to next Player
    player1El.classList.add("player--active");
  }
});
