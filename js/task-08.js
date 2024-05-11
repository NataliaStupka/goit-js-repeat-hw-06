const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Заповніть усі поля.");
  }
  const data = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };
  console.log(data);

  const formData = new FormData(event.target);
  formData.forEach((value, name) => {
    console.log(name);
    console.log(value);
  });

  console.log("email:", email);
  console.log("password:", password);

  event.currentTarget.reset();
}
