import headerLoader from "./header";
import cattImage from "./imgs/catt.png";

export default function contactPageLoad() {
	headerLoader();
	const content = document.getElementById("content");

	// contact-main
	const contactMain = document.createElement("main");
	contactMain.classList.add("contact__main");
	content.append(contactMain);

	// contact-textSectionLeft
	const contactTextSectionLeft = document.createElement("section");
	contactTextSectionLeft.classList.add("contact__textSection--left");
	contactMain.append(contactTextSectionLeft);

	const leftText = document.createElement("h3");
	leftText.classList.add("contact__text--left");
	contactTextSectionLeft.append(leftText);
	leftText.textContent = "Dont break anything in here!";

	// catt-img
	const catt = new Image();
	catt.src = cattImage;
	catt.classList.add("contact__catt");
	contactMain.append(catt);

	// contact-textSectionRight
	const contactTextSectionRight = document.createElement("section");
	contactTextSectionRight.classList.add("contact__textSection--right");
	contactMain.append(contactTextSectionRight);

	const righText = document.createElement("h3");
	righText.classList.add("contact__text--right");
	contactTextSectionRight.append(righText);
	righText.textContent = "Else you wont get to be inside the next time!";
}

//  text idea - , dont ever come again human!... but on second thoughts.. you can come if master challe allows it
