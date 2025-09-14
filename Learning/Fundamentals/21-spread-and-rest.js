// Rest parameter
function sumAll(...args) {
	let sum = 0;

	for (let arg of args) sum += arg;

	return sum;
}

console.log(sumAll(1));
console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3));

// Spread operator
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(...arr1, ...arr2);
console.log(Math.max(...arr1, ...arr2));
