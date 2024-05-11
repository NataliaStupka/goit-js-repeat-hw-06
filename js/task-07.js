const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

slider.addEventListener("change", onChangesFontSize);

function onChangesFontSize(event) {
  //const selectNumber = Number(slider.value);
  const selectNumber = Number(event.currentTarget.value);
  console.log(`SelectNumber: ${selectNumber}px`);

  text.style.fontSize = selectNumber + "px";
}
