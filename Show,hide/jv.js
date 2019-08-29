let button = document.getElementById("button");
var p = document.getElementById("demo");

button.addEventListener("click", onbuttonclick);

function onbuttonclick() {
    var p = document.getElementById("demo");
    if (p.style.display === "none") {
        p.style.display = "block";
        button.innerHTML = "Hide";
    } else {
        p.style.display = "none";
        button.innerHTML = "Show";
    }
}