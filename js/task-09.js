const body = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const textNumberColor = document.querySelector(".color");
buttonEl.addEventListener("click", onButtonChangeColor);

function onButtonChangeColor(event) {
  const randomColor = getRandomHexColor();
  textNumberColor.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
