const noButton = document.getElementsByClassName("no-button")[0];
const yesButton = document.getElementsByClassName("yes-button")[0];

const firstCard = document.getElementsByClassName("card")[0];
const secondCard = document.getElementsByClassName("card-right")[0];

const phrases = ['¿Qué?', 'Dale', 'Pero que ha pasao :(', 'Tu eres chistosa', 'Ya oe', 'Me vas a hacer sentir mal', ':(', 'Ta bien', 'Dale porfa', 'Porfa', 'Please', 'Im beggin', 'Mis nocheees', 'de eneroo', 'Dale', 'Fla', 'qui', 'ta', 'Shovana', ':((((', 'Bueno', 'PORFA', 'Me gustas', 'Aceptame o la vas a pasar mal', 'Con este son 25 rechazos oe', ':(((', 'Yo viajare', 'Aprendiendo', 'a seguiiir', 'Aceptame o no canto más', '💔​💔​💔​💔​']
let phraseIndex = 0;

noButton.addEventListener("click", () => {
    console.log(phraseIndex);
    var currentYesWidth = yesButton.offsetWidth;
    var currentYesHeight = yesButton.offsetHeight;

    var currentNoWidth = noButton.offsetWidth;

    if(phraseIndex >= phrases.length) phraseIndex = 0;
    noButton.innerHTML = phrases[phraseIndex];
    phraseIndex++;

    yesButton.style.width = (currentYesWidth + 15) + "px";
    yesButton.style.height = (currentYesHeight + 15) + "px";


    if(noButton.offsetWidth < 70) return null;
    noButton.style.width = (currentNoWidth - 15) + "px";
})

yesButton.addEventListener("click", () => {
    firstCard.classList.add('get-out');
    secondCard.classList.add('get-out-card-right');
})