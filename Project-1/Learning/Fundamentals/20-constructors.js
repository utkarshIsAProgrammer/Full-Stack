// Making a constructor function
function Employee(name, role) {
	this.name = name;
	this.role = role;
}

const firstEmployee = new Employee("Harry", "Web Developer");
console.log(firstEmployee);

const secondEmployee = new Employee("Maria", "Database Manager");
console.log(secondEmployee);

// Using new.target
function User(name) {
	// if you run me without new
	if (!new.target) {
		return new User(name); // I will add new for you
	}

	this.name = name;
}

let john = User("John");
alert(john.name);
