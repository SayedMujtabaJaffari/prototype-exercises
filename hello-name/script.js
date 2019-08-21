let input = document.getElementById("name");
var button = document.getElementById("button");

button.addEventListener("click", onbuttonclick)

function onbuttonclick() {
    if (input.value == "") {
        alert("Please enter your name!")
    } else {
        alert("Hello " + input.value)
    }
}