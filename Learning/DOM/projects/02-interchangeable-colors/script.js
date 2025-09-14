// Getting Elements From The DOM
const btns = document.querySelectorAll(".btn");
const body = document.body;
// console.log(btns);

// Iterating over all buttons
btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		number = btn.value;
		changeBackground(number);
	});
});

function changeBackground(number) {
	// console.log(number);
	body.className = "";

	switch (number) {
		case "#9b2226":
			body.classList.add("one");
			break;
		case "#ae2012":
			body.classList.add("two");
			break;
		case "#bb3e03":
			body.classList.add("three");
			break;
		case "#ca6702":
			body.classList.add("four");
			break;
		case "#ee9b00":
			body.classList.add("five");
			break;
		case "#e09f3e":
			body.classList.add("six");
			break;
		default:
			break;
	}
}
