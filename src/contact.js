import headerLoader from "./header";

export default function contactPageLoad() {
	headerLoader();
	const content = document.getElementById("content");
	const menuMain = document.createElement("main");
	menuMain.classList.add("menu__main");
	content.append(menuMain);
}
