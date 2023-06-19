"use strict";
let cl = console.log;
// GET THE ELEMENTS
const boxesParent = document.querySelector(".boxes-parent");
const computerChooseParagraph = document.querySelector('.computer-chose')
const showBox = document.querySelector('.show-box')

// ADD EVENT LISTENER TO THE BOXES PARENT
boxesParent.addEventListener("click", (ev) => {
	let target = ev.target;
  if (target !== boxesParent) {
    computerChooseParagraph.style.display ='block'
    showBox.style.display ='block'
    const computerChoice = computerChoose();
    computerChooseParagraph.textContent = `Computer's Choose Is: ${computerChoice}`;
		let userChoise = target.textContent;
		let result =
			userChoise === "✊" && computerChoice === "✌️"
				? "You are The Winner"
				: userChoise === "✊" && computerChoice === "✋"
				? "Computer Is The Winner"
				: userChoise === "✌️" && computerChoice === "✋"
				? "You are The Winner"
				: userChoise === "✌️" && computerChoice === "✊"
				? "Computer Is The Winner"
				: userChoise === "✋" && computerChoice === "✊"
				? "You are The Winner"
				: userChoise === "✋" && computerChoice === "✌️"
				? "Computer Is The Winner"
				:  "It's a Tie";
        return showBox.textContent = result;
  }
});
// WORK WITH COMPUTER CHOOSE
function computerChoose() {
	let arr = ["✊", "✋", "✌️"];
	let number = arr[Math.floor(Math.random() * arr.length)];
	return number;
}
