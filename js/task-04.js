const buttonDecrement = document.querySelector("button[data-action=decrement]");
const buttonIncrement = document.querySelector("button[data-action=increment]");
const valueEl = document.querySelector("#value");

buttonDecrement.addEventListener("click", onButtonDecrement);
buttonIncrement.addEventListener("click", onButtonIncrement);

let counterValue = 0;

function onButtonDecrement() {
  console.log("clik -");
  counterValue -= 1;

  valueEl.textContent = `${counterValue}`;
}

function onButtonIncrement() {
  console.log("clik +");
  counterValue += 1;
  valueEl.textContent = `${counterValue}`;
}
