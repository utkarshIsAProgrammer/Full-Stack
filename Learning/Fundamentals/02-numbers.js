// Old way of writing a number
let billion = 1000000000;
console.log(billion);

// Modern way of writing a number
let modernBillion = 1_000_000_000;
console.log(modernBillion);

// Shortening a number
let shortBillion = 1e9;
console.log(shortBillion);

let veryShortNumber = 1e-69;
console.log(veryShortNumber);

// String representation of a number
let stringNumber = 255;
console.log(stringNumber.toString(16)); // ff

// 1. Round down a number
console.log(Math.floor(3.6));

// 2. Round up a number
console.log(Math.ceil(3.1));

// 3. Round to the nearest integer
console.log(Math.round(3.4));
console.log(Math.round(3.7));

// 4. Remove anything after decimal point
console.log(Math.trunc(4.2));

// 5. Rounds number to 'n' number of decimal digits
let num = 4.552368974526;
console.log(num.toFixed(4));

//Infinity number
console.log(1.5e500); // Infinity

// This is a self increasing number
console.log(9999999999999999); // 10000000000000000

// Check if the number is finite
console.log(isFinite(500));

// Check is this is not a number
console.log(isNaN('str'));
console.log(isNaN(500));

// Finding maximum and minimum number
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

// Raising number to the power of 'n'
console.log(Math.pow(2, 5));
