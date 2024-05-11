const inputEl = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputEl);

function onInputEl(event) {
  const name = event.currentTarget.value;

  if (inputEl.value === "") {
    return (nameOutput.textContent = "Anonymous");
  }
  return (nameOutput.textContent = name);
}
