console.log("this is a test");
import "./styles.css";
import { loadHome } from "./initialLoad.js";
import { loadAbout } from "./about.js";
import { loadMenu } from "./menu.js";

const content = document.querySelector("#content");
const home = document.querySelector("#home");
const About = document.querySelector("#About");
const Menu = document.querySelector("#Menu");

loadHome(content);

About.addEventListener('click', () => {
    loadAbout(content);
})

home.addEventListener('click', () => {
    loadHome(content);
})

Menu.addEventListener('click', () => {
    loadMenu(content);
})