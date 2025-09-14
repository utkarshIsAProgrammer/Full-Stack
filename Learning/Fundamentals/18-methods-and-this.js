// Making a simple method inside an object and using "this"

// Method 1
let person = {
	name: "Panchajanya",
	greet: function () {
		console.log(`Hello! ${this.name}`);
	},
};

person.greet();

// Method 2
person = {
	name: "Panchajanya",
	greet() {
		console.log(`Hello! ${this.name}`);
	},
};

person.greet();
