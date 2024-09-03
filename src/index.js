"use strict";
import "./style.css";
import { homePage } from "./home.js";
import { displayMenu, clearMenu } from "./menu.js";

const content = document.querySelector("#content");
const navBtns = document.querySelector(".nav-btns");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

navBtns.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("active")) return;

  if (e.target.textContent === "Home") {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    e.target.classList.add("active");
    menuBtn.classList.remove("active");

    homePage();
  }
  if (e.target.textContent === "Menu") {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
    clearMenu();
    e.target.classList.add("active");
    homeBtn.classList.remove("active");
    displayMenu();
  }
});

homePage();
