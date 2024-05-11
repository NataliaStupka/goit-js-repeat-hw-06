const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  // console.log("blur-value:", event.currentTarget.value);
  // console.log("blur-length:", event.currentTarget.value.length);
  const actualNumberCharacters = event.currentTarget.value.length;
  const maxNumberCharacters = Number(event.currentTarget.dataset.length);

  if (actualNumberCharacters > maxNumberCharacters) {
    console.log("Забагато");
    input.classList.add("invalid");
  } else {
    console.log("все норм");
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
});
