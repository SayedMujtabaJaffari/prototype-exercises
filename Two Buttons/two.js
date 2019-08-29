let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
var p = document.getElementById("demo");

button1.addEventListener("click", onbuttonclick);
button2.addEventListener("click", onbuttonclicked);

function onbuttonclick() {
    p.innerHTML = "Button 1 was clicked!";
}


function onbuttonclicked() {
    p.innerHTML = "You clicked on Button 2!";
}