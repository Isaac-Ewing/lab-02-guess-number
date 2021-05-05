const guess = document.getElementById('guess-input');
const submitButton = document.getElementById('submit');
const guessesLeft = document.getElementById('guesses-left');
const dispResult = document.getElementById('result');

let guesses = 4;
let key = 0;   //To enable/disable the 'guess' button
let losses = 0;
let wins = 0;
const answer = Math.ceil(Math.random() * 20);

if ((guesses > 0) && (key === 0)) {
    submitButton.addEventListener('click', () => {
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
            dispResult.textContent = `Correct!`;
            key = 1;
        }
        if (Number(guess.value) !== answer && guesses === 0) {
            losses++;
            dispResult.textContent = `Wrong and out of guesses. You have ${wins} wins and ${losses} losses. Try again?`;
            key = 1;
        };
    });
};