let redButton = document.getElementById("red-button");

redButton.addEventListener("click", onRedButtonClicked);

function onRedButtonClicked() {
    document.body.style.background = 'red';
    alert("You clicked the red button!");
}


let greenButton = document.getElementById("green-button");

greenButton.addEventListener("click", onGreenButtonClicked);

function onGreenButtonClicked() {
    document.body.style.background = 'green';
    alert("You clicked the green button!");
}


let blueButton = document.getElementById("blue-button");

blueButton.addEventListener("click", onBlueButtonClicked);

function onBlueButtonClicked() {
    document.body.style.background = 'blue';
    alert("You clicked the blue button!");
}