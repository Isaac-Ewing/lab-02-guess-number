const guess = document.getElementById('guess-input');
const submitButton = document.getElementById('submit');
const guessesLeft = document.getElementById('guesses-left');
const dispResult = document.getElementById('result');
const resetButton = document.getElementById('reset');

let guesses = 4;
let reset = 0;
let losses = 0;
let wins = 0;
let answer = Math.ceil(Math.random() * 20);

submitButton.addEventListener('click', () => {
    if ((guesses > 0) && (reset === 0)) {
        console.log(answer);
        guesses--;
        guessesLeft.textContent = guesses;
        if (Number(guess.value) > answer) {
            dispResult.textContent = `Too high!`;
        }
        if (Number(guess.value) < answer) {
            dispResult.textContent = `Too low!`;
        }
        if (Number(guess.value) === answer) {
            wins++;
            dispResult.textContent = `Correct! You have ${wins} wins and ${losses} losses. Try again?`;
            reset = 1;
        }
        if (Number(guess.value) !== answer && guesses === 0) {
            losses++;
            dispResult.textContent = `Wrong and out of guesses. You have ${wins} wins and ${losses} losses. Try again?`;
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
});