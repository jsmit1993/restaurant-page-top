console.log("this is a test");
import "./styles.css";
import { loadHome } from "./initialLoad.js";

const content = document.querySelector("#content");

loadHome(content);