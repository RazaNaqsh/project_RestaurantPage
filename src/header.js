import mythrilImg from "./imgs/Mythril.png";

export default function headerLoader() {
	const content = document.getElementById("content");

	// header
	const header = document.createElement("header");
	header.classList.add("content__header");
	content.append(header);
	// header-title
	const headerTitle = document.createElement("h1");
	headerTitle.textContent = "Challe Fen Challe";
	headerTitle.classList.add("header__title");
	header.append(headerTitle);

	// header-img
	const mythril = new Image();
	mythril.src = mythrilImg;
	header.append(mythril);
	mythril.classList.add("header__mythril");

	// header-nav
	const navBar = document.createElement("nav");
	navBar.classList.add("header__nav");
	header.append(navBar);

	const ul = document.createElement("ul");
	navBar.append(ul);
	const listArray = ["Home", "Menu", "Contact"];
	for (let i = 0; i < listArray.length; i += 1) {
		const li = document.createElement("li");
		li.innerHTML = `<a href="" class =${listArray[i]}>${listArray[i]}</a>`;
		ul.append(li);
	}
}
