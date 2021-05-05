export function compareNumbers(guess, correctNumber) {
    if (guess > correctNumber)
        return (1);
    if (guess === correctNumber)
        return (0);
    return (-1);
};