"use strict";
import "./style.css";
import { homePage } from "./home.js";
import { displayMenu, clearMenu } from "./menu.js";
import { displayAbout } from "./about.js";

const content = document.querySelector("#content");
const navBtns = document.querySelector(".nav-btns");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

const clear = function (e) {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  e.target.classList.add("active");
};

navBtns.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("active")) return;

  // Home button
  if (e.target.textContent === "Home") {
    clear(e);
    menuBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
    homePage();
  }

  // Menu button
  if (e.target.textContent === "Menu") {
    clear(e);
    clearMenu();
    homeBtn.classList.remove("active");
    aboutBtn.classList.remove("active");
    displayMenu();
  }

  // About button
  if (e.target.textContent === "About") {
    clear(e);
    homeBtn.classList.remove("active");
    menuBtn.classList.remove("active");
    displayAbout();
  }
});

homePage();
