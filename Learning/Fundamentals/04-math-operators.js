// Math operators
console.log(2 + 2);
console.log(9 - 2);
console.log(8 * 2);
console.log(8 / 2);
console.log(8 % 2);
console.log(8 ** 2);

// String concatenation using "+" operator
console.log('Hello' + ' World!');

// "+" operator always try to return a string if any of the operand is string
console.log(2 + 2 + '2');
// 2+2+"2" = 4+"2" = "42"

// Other always always return a number
console.log('5' - 3);
console.log('6' / 3);
console.log('6' * 3);
console.log('6' % 3);
console.log('6' ** 3);

// Chaining assignments
let a, b, c;
a = b = c = 4 + 4;
console.log(a, b, c);

// Increment operator
let y = 5;
y++;
console.log(y);

// Decrement operator
let z = 5;
z--;
console.log(z);
