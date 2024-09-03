"use strict";

export const homePage = function () {
  const content = document.querySelector("#content");
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-page");
  const title = document.createElement("h1");
  title.textContent = "Straight from the Vine";
  const promoText = document.createElement("h3");
  promoText.textContent = "The new juice bar taking the city by storm";
  homeDiv.appendChild(title);
  homeDiv.appendChild(promoText);
  content.appendChild(homeDiv);
};
