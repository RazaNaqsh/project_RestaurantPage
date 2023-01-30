import mythril from "./imgs/Mythril.png";

export default function intialLoad() {
	const content = document.getElementById("content");

	// header
	const header = document.createElement("header");
	header.classList.add("content__header");
	// header-title
	const title = document.createElement("h1");
	title.textContent = "Challe Fen Challe";
	title.classList.add("header__title");
	header.append(title);
	content.append(header);

	// header-img
	const mythrilImg = new Image();
	mythrilImg.src = mythril;
	header.append(mythrilImg);
	mythrilImg.classList.add("header__mythril");
}
