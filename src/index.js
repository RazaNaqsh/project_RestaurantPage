import initialPage from "./initialpage";
import "./style.css";
import menuPage from "./menu";
import contactPage from "./contact";

initialPage();

function linkPage() {
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
		linkPage();
	}
	function loadMenuPage(e) {
		e.preventDefault();
		removeContentElements();
		menuPage();
		linkPage();
	}
	function loadContactPage(e) {
		e.preventDefault();
		removeContentElements();
		contactPage();
		linkPage();
	}

	home.addEventListener("click", loadHomePage);
	menu.addEventListener("click", loadMenuPage);
	contact.addEventListener("click", loadContactPage);
}

linkPage();
