const n1Input = document.getElementById('n1');
const n2Input = document.getElementById('n2');


const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const miltiplyButton = document.getElementById('miltiply-button');
const divisionButton = document.getElementById('division-button');


const resultElement = document.getElementById('result');


addButton.addEventListener('click', add);
subtractButton.addEventListener('click', minuse);
miltiplyButton.addEventListener('click', ganger);
divisionButton.addEventListener('click', division);


function add(event) {
    const n1 = parseFloat(n1Input.value);
    const n2 = parseFloat(n2Input.value);
    resultElement.innerHTML = n1 + n2;
}

function minuse(event) {
    const n1 = parseFloat(n1Input.value);
    const n2 = parseFloat(n2Input.value);
    resultElement.innerHTML = n1 - n2;
}

function ganger(event) {
    const n1 = parseFloat(n1Input.value);
    const n2 = parseFloat(n2Input.value);
    resultElement.innerHTML = n1 * n2;
}

function division(event) {
    const n1 = parseFloat(n1Input.value);
    const n2 = parseFloat(n2Input.value);
    resultElement.innerHTML = n1 / n2;
}