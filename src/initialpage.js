import mythrilImg from "./imgs/Mythril.png";
import challeImg from "./imgs/Challe.png";

export default function intialLoad() {
	const content = document.getElementById("content");

	// header
	const header = document.createElement("header");
	header.classList.add("content__header");
	// header-title
	const headerTitle = document.createElement("h1");
	headerTitle.textContent = "Challe Fen Challe";
	headerTitle.classList.add("header__title");
	header.append(headerTitle);
	content.append(header);

	// header-img
	const mythril = new Image();
	mythril.src = mythrilImg;
	header.append(mythril);
	mythril.classList.add("header__mythril");

	// header-nav
	const navBar = document.createElement("nav");

	// main
	const main = document.createElement("main");
	main.classList.add("main");
	content.append(main);

	// main-challe
	const challe = new Image();
	challe.src = challeImg;
	challe.classList.add("main__challe");
	main.append(challe);

	// main-textSection
	const mainTextSection = document.createElement("section");
	mainTextSection.classList.add("main__textSection");
	main.append(mainTextSection);

	// main-title
	const maintitle = document.createElement("h2");
	mainTextSection.append(maintitle);
	maintitle.classList.add("main__title");
	maintitle.textContent = "Welcome to the Warrior Fairy Restaurant~";

	// main-textContent
	const mainPara = document.createElement("p");
	mainPara.classList.add("main__text");
	mainTextSection.append(mainPara);
	mainPara.textContent = "Would you like some sugar silver?";
}
