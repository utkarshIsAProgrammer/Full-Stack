// Using conditional statements
let age = 10;

if (age <= 0 || age > 120) {
  console.log("You don't exist in this world!");
} else if (age >= 18) {
  console.log('You can drive a car.');
} else {
  console.log('You cannot drive a car.');
}

// Using ternary operator
age <= 0 || age > 120
  ? console.log("You don't exist in this world!")
  : age >= 18
    ? console.log('You can drive a car.')
    : console.log('You cannot drive a car.');
