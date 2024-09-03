"use strict";

const contentContainer = document.querySelector("#content");
const menu = document.createElement("div");
menu.classList.add("menu");

const menuItem = function (item, description, cost) {
  const menuItemDiv = document.createElement("div");
  menuItemDiv.classList.add("menu-item");

  // Menu item
  const itemDiv = document.createElement("div");
  const itemSpan = document.createElement("span");
  itemSpan.textContent = item;
  itemDiv.appendChild(itemSpan);

  // Item description
  const descriptionDiv = document.createElement("div");
  const descriptionSpan = document.createElement("span");
  descriptionSpan.textContent = description;
  descriptionDiv.appendChild(descriptionSpan);

  // Item cost
  const costDiv = document.createElement("div");
  const costSpan = document.createElement("span");
  costSpan.textContent = cost;
  costDiv.appendChild(costSpan);

  // Appending
  menuItemDiv.appendChild(itemDiv);
  menuItemDiv.appendChild(descriptionDiv);
  menuItemDiv.appendChild(costDiv);
  menu.appendChild(menuItemDiv);
};

export const clearMenu = function () {
  while (menu.firstChild) {
    menu.removeChild(menu.firstChild);
  }
};

export const displayMenu = function () {
  contentContainer.appendChild(menu);
  menuItem("Orange Juice", "Freshly squeezed orange juice", "$4");
  menuItem(
    "Piña Colada",
    "Pineapple-Coconut Juice, Pineapple, Banana, Agave",
    "$6"
  );
  menuItem("Mmm Mango", "Mango Juice, Mango, Agave", "$5");
  menuItem("Sunset Delight", "Banana, Apple, Agave, Grapes", "$7");
  menuItem("Carrot Juice", "Carrot Juice with a dash of Lemon", "$4");
  menuItem("Ocean Waves", "Cocounut Milk, Apple Juice, Banana, Agave", "$8");
};
