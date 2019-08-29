let numberToGuess = Math.round(Math.random() * 20);
var button = document.getElementById("button");
var input = document.getElementById("number");
var p = document.getElementById("reslut");

button.addEventListener("click", onButtonClicked)

function onButtonClicked(event) {
    event.preventDefault();
    let guessedNumber = parseInt(input.value);

    if (guessedNumber === numberToGuess) {
        p.innerHTML = 'You guessed the correct number!';
    } else if (guessedNumber < 0) {
        p.innerHTML = 'The guessed number must be between 0 and 20';
    } else if (guessedNumber > 20) {
        p.innerHTML = 'The guessed number must be between 0 and 20';
    } else if (guessedNumber < numberToGuess) {
        p.innerHTML = 'Your guess is too low';
    } else if (guessedNumber > numberToGuess) {
        p.innerHTML = 'Your guess is too high';
    } else {
        p.innerHTML = 'Your guess must be a number!';
    }

}