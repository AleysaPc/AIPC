const button = document.getElementById("button");
const body = document.querySelector("body");
const colorNumber = document.querySelector(".color-number");
const colorCard = document.querySelector(".color-card");

const ramdonColors = function (){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgbColors = `rgb(${r}, ${g}, ${b})`;

    return rgbColors;
}

const setBackgroundColor = () => {
    const newColor = ramdonColors();
    colorNumber.innerHTML = newColor;
    body.style.backgroundColor = newColor;
    colorCard.style.backgroundColor = newColor;
}

button.addEventListener("click", setBackgroundColor);

