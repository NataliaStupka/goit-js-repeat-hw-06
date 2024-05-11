const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

// const elements = ingredients.map((element) => {
//   const liElement = document.createElement("li");
//   liElement.textContent = element;
//   liElement.classList.add("item");
//   return liElement;
// });

// list.append(...elements);

const makeIngredient = (ingredients) => {
  return ingredients.map((ingredient) => {
    const liElement = document.createElement("li");
    liElement.textContent = ingredient;
    liElement.classList.add("item");
    return liElement;
  });
};
//викликаємо функцію і передаємо в неї масив
const elements = makeIngredient(ingredients);
list.append(...elements);
