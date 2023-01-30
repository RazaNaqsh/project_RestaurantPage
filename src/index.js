import initialPage from "./initialpage";
import menuPage from "./menu";
import contactPage from "./contact";
import "./style.css";

initialPage();
const home = document.querySelector(".Home");
const menu = document.querySelector(".Menu");
const contact = document.querySelector(".Contact");

function removeContentElements() {
	const content = document.querySelector("#content");
	let child = content.lastElementChild;
	while (child) {
		content.removeChild(child);
		child = content.lastElementChild;
	}
}
function loadHomePage(e) {
	e.preventDefault();
	removeContentElements();
	initialPage();
}
function loadMenuPage(e) {
	e.preventDefault();
	removeContentElements();
	menuPage();
}
function loadContactPage(e) {
	e.preventDefault();
	removeContentElements();
	contactPage();
}

home.addEventListener("click", loadHomePage);
menu.addEventListener("click", loadMenuPage);
contact.addEventListener("click", loadContactPage);
console.log("Webpack here!");

//  code to remove child elements
//  const content = document.querySelector(.content);
// let child = content.lastElementChild;
// console.log(child);
// while (child) {
// 	content.removeChild(child);
// 	child = content.lastElementChild;
// }
