import headerLoader from "./header";
import challeImg from "./imgs/Challe.png";
import linkPage from ".";

export default function intialLoad() {
	headerLoader();
	linkPage();
	console.log("initial page");

	const content = document.getElementById("content");
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
