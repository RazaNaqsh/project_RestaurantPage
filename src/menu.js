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

	//  titles
	const menuTextSectionTitle = document.createElement("h2");
	menuTextSectionTitle.classList.add("menu__textSection__title");
	menuTextSection.append(menuTextSectionTitle);
	menuTextSectionTitle.textContent = "What would you like to eat..?";

	const menuTextMainTitle = document.createElement("h1");
	menuTextMainTitle.classList.add("menu__textMainTitle");
	menuTextSection.append(menuTextMainTitle);
	menuTextMainTitle.textContent = "The Menu~";

	// menu-grid
	const menuGridContainer = document.createElement("div");
	menuGridContainer.classList.add("menu__gridContainer");
	menuTextSection.append(menuGridContainer);

	// grid-items
	const menuItems = ["item1", "item2", "item3", "item4"];
	for (let i = 0; i < menuItems.length; i += 1) {
		const gridItem = document.createElement("div");
		gridItem.classList.add("gridItem");
		menuGridContainer.append(gridItem);
		const itemImg = document.createElement("div");
		itemImg.classList.add(`${menuItems[i]}`);
		gridItem.append(itemImg);
		const itemDesc = document.createElement("h3");
		itemDesc.classList.add("gridItem__Desc");
		gridItem.append(itemDesc);
	}
	//  menu-hugh
	const hugh = new Image();
	hugh.src = hughImg;
	hugh.classList.add("menu__hugh");
	menuMain.append(hugh);
}
