"use strict";

const contentContainer = document.querySelector("#content");

export const displayAbout = function () {
  // About div
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about");

  // About us
  const aboutUs = document.createElement("p");
  aboutUs.classList.add("about-us");
  aboutUs.textContent =
    "We are two friends with a passion for fresh fruit. Having both grown up in a big city in the north, fresh fruit were hard to come by. We remember how no one ever wanted to eat and fruits or vegetables because they tastde like plastic. We hope to change that belief for people. This is also a great place for people that don't want to drink alchol but still want that bar feel.";

  // Location
  const location = document.createElement("p");
  location.classList.add("location");
  location.textContent = "We are located in downtown Manhattan";

  // Contact
  const contact = document.createElement("p");
  contact.classList.add("contact");
  contact.textContent = "You can contact us at this number: *********";

  // Appending
  aboutDiv.appendChild(aboutUs);
  aboutDiv.appendChild(location);
  aboutDiv.appendChild(contact);
  contentContainer.appendChild(aboutDiv);
};
