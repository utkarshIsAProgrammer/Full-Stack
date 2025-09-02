// Array destructuring
let arr = ["Harry", "Smith"];

// Destructuring
let [firstName, surname] = arr;

console.log(firstName);
console.log(surname);

// Object destructuring
let options = {
	title: "Menu",
	width: 100,
	height: 200,
};

// Destructuring
let { title, width, height } = options;

console.log(title);
console.log(width);
console.log(height);

// Nested destructuring
let newOptions = {
	size: {
		newWidth: 100,
		newHeight: 200,
	},
	items: ["Cake", "Donut"],
	extra: true,
};

// Destructuring
let {
	size: { newWidth, newHeight },
	items: [item1, item2],
	newTitle = "Menu",
} = newOptions;

console.log(newTitle);
console.log(newWidth);
console.log(newHeight);
console.log(item1);
console.log(item2);
