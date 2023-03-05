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
	const menuItems = [
		{
			name: "Item1",
			src: "https://media.istockphoto.com/id/1161805849/photo/strawberry-vanilla-chocolate-ice-cream-with-waffle-cone-on-marble-stone-backgrounds.jpg?s=612x612&w=0&k=20&c=BXObHKE0gbA2autsMZGFeEmK2xGKYdJBbM1_ig0Boyk=",
		},
		{
			name: "Item2",
			src: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/homemade-ice-cream-recipe.jpg",
		},
		{
			name: "Item3",
			src: "https://www.allrecipes.com/thmb/P59TgUCXtQbv69dHRlZduE38xs8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/453291-five-ingredient-ice-cream-Alberta-Rose-4x3-1-4c9ec10ac4ab4e828615e81aa608dd6b.jpg",
		},
		{
			name: "Item4",
			src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg",
		},
	];

	for (let i = 0; i < menuItems.length; i += 1) {
		const gridItem = document.createElement("div");
		gridItem.classList.add("gridItem");
		menuGridContainer.append(gridItem);

		const itemImg = document.createElement("img");
		itemImg.src = `${menuItems[i].src}`;
		itemImg.classList.add("menu-img");
		gridItem.append(itemImg);

		const itemDesc = document.createElement("h2");
		itemDesc.classList.add("gridItem__Desc");
		itemDesc.textContent = `${menuItems[i].name}`;
		gridItem.append(itemDesc);
	}
	//  menu-hugh
	const hugh = new Image();
	hugh.src = hughImg;
	hugh.classList.add("menu__hugh");
	menuMain.append(hugh);
}
