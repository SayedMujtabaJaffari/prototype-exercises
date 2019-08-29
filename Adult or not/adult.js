let input1 = document.getElementById("name");
let input2 = document.getElementById("number");
var button = document.getElementById("button");

button.addEventListener("click", onbuttonclick)

function onbuttonclick() {
    if (input.number == "") {
        alert("Hello" + input + !+"You are an adult");
    } else {
        alert("Hello" + input + !+"You are not adult");
    }
}