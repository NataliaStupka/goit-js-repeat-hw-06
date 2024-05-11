// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const list = document.querySelector("#categories");

const numberOfCategories = list.children.length;
console.log("Number of categories:", numberOfCategories);

const arrayLi = list.children;
[...arrayLi].forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);

  console.log("Elements:", element.lastElementChild.children.length);
});
