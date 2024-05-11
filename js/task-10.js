//Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів
// в input і натискає кнопку Створити, після чого рендериться колекція.
//Натисненням на кнопку Очистити, колекція елементів очищається.

//Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>,
//скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//Використовуй готову функцію getRandomHexColor для отримання кольору.

//Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
//--------------------------------------------------------------------------------------------------------------

const inputEl = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const container = document.querySelector("#boxes");

let selectedNumber = 0;

inputEl.addEventListener("change", (event) => {
  selectedNumber = event.currentTarget.value;
});

buttonCreate.addEventListener("click", onCreateBoxes);
buttonDestroy.addEventListener("click", onDestroyBoxes);

function onCreateBoxes() {
  console.log("click create");
  const boxesArray = []; //масив створенних елементів

  let boxSize = 30;

  for (let i = 1; i <= selectedNumber; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.marginTop = "2px";
    boxesArray.push(box);

    boxSize += 10;
  }

  container.append(...boxesArray);
}

function onDestroyBoxes(event) {
  console.log("click Destroy");
  container.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
