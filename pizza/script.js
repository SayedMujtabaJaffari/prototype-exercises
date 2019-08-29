const buttonElement = document.getElementById('button');
const foodInput = document.getElementsByName('food');


const KababInput = document.getElementById('kabab');
const ExtraostInput = document.getElementById('extra-ost');
const RodlokInput = document.getElementById('rödlök');
const doublepizzapepproniInput = document.getElementById('double-pizza-pepproni');
const quadsizedoubletoppingextrapepperoniInput = document.getElementById('quad-size-double-topping-extra-pepperoni');

const reslut = document.getElementById('reslut');




buyButton.addEventListener('click', buy);

function buy(event) {
    let pris = 0;

    if (foodInput[0].checked) {
        pris += parseFloat(foodInput[0].value);
    }
    if (foodInput[1].checked) {
        pris += parseFloat(foodInput[1].value);
    }
    if (foodInput[2].checked) {
        pris += parseFloat(foodInput[2].value);
    }
    if (KababInput.checked) {
        pris += parseFloat(KababInput.value);
    }
    if (ExtraostInput.checked) {
        pris += parseFloat(ExtraostInput.value);
    }
    if (RodlokInput.checked) {
        pris += parseFloat(RodlokInput.value);
    }
    if (doublepizzapepproniInput.checked) {
        pris += parseFloat(doublepizzapepproniInput.value);
    }

    if (quadsizedoubletoppingextrapepperoniInput.checked) {
        pris += parseFloat(quadsizedoubletoppingextrapepperoniInput.value);
    }

    reslut.innerHTML = pris;
    console.log(pris);

}