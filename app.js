import { compareNumbers } from './functions.js'

const guess = document.getElementById('guess-input');
const submitButton = document.getElementById('submit');
const guessesLeft = document.getElementById('guesses-left');
const dispResult = document.getElementById('result');
const resetButton = document.getElementById('reset');

let guesses = 4;
let reset = 0; //to disable the 'Guess' button
let losses = 0;
let wins = 0;
let answer = Math.ceil(Math.random() * 20);

submitButton.addEventListener('click', () => {
    if ((guesses > 0) && (reset === 0)) {
        guesses--;
        guessesLeft.textContent = guesses;
        if (compareNumbers(Number(guess.value), answer) === 1) 
            dispResult.textContent = `Too high!`;
        
        if (compareNumbers(Number(guess.value), answer) === -1) 
            dispResult.textContent = `Too low!`;
        
        if (compareNumbers(Number(guess.value), answer) === 0) {
            wins++;
            dispResult.textContent = `Correct! Wins: ${wins} Losses: ${losses}. Try again?`;
            reset = 1;
        }
        if (compareNumbers(Number(guess.value), answer) !== 0 && guesses === 0) {
            losses++;
            dispResult.textContent = `Wrong and out of guesses. Wins: ${wins} Losses: ${losses}. Try again?`;
            reset = 1;
        };
    };
});

resetButton.addEventListener('click', () => {
    guesses = 4;
    guessesLeft.textContent = guesses;
    answer = Math.ceil(Math.random() * 20);
    dispResult.textContent = ``;
    reset = 0;
    guess.textContent = ``;
});