import headerLoader from "./header";
import hughImg from "./imgs/hugh.png";

export default function menuPageLoad() {
	headerLoader();
	const content = document.getElementById("content");

	//  menu-main
	const menuMain = document.createElement("main");
	menuMain.classList.add("menu__main");
	content.append(menuMain);

	//  menu-textContent
	const menuTextSection = document.createElement("section");
	menuTextSection.classList.add("menu__textSection");
	menuMain.append(menuTextSection);

	//  menu-hugh
	const hugh = new Image();
	hugh.src = hughImg;
	hugh.classList.add("menu__hugh");
	menuMain.append(hugh);
}
