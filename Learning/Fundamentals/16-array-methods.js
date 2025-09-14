// Delete an element from any array (incorrect solution)
let arr = ['I', 'study', 'JavaScript', 'right', 'now'];
delete arr[1];
console.log(arr);
console.log(arr.length); // 5

// Using splice method to delete an element from an array
arr.splice(1, 1); // start from index 1 and remove index 1
console.log(arr);

let removedElements = arr.splice(0, 2); // start from index 0 and remove all elements upto index 2
console.log(arr);
console.log(removedElements);

// Adding elements using splice method
arr.splice(0, 0, 'I', 'study', 'javascript'); // start with index 0 and delete nothing
console.log(arr);

// slice() method returns a new string of the sliced array
let test = ['t', 'e', 's', 't'];
console.log(test.slice(2));
console.log(test.slice(1, -1));

// concat() method add an array with the current array
let strNum = ['1', '2', '3'];
console.log(strNum.concat(['4', '5']));

// forEach() method iterate over each array element and perform a given action on each element
let intNum = [1, 2, 3, 4, 5, 3];
intNum.forEach((n) => {
  console.log(n ** 2);
});

// indexOf() method find the index position of the first occurrence of an element in an array
console.log(intNum.indexOf(2));

// lastIndexOf() method find the last occurrence of an element in an array
console.log(intNum.lastIndexOf(3));

// find() method returns the first element in the array that satisfies the given condition. If no elements satisfy the condition, it returns undefined
console.log(intNum.find((n) => n % 2 === 0));

// filter() method looks for the all elements that makes the function return true
console.log(intNum.filter((n) => n % 2 === 0));

// map() method call the function for each elements of an array and return a new array of results
let lengths = ['Pineapple', 'Pomegranate', 'Mango'].map((i) => {
  return i.length;
});
console.log(lengths);

// sort() method sort the array in ascending order as strings byDefault
console.log(lengths.sort());

// reverse() method reverse the elements of the array
console.log(lengths.reverse());

// split() method split string into an array
let thisString = 'Hello World!';
let stringArray = thisString.split(' ');
console.log(stringArray);

// join() method join the array as a string
let arrayString = stringArray.join();
console.log(arrayString);

// reduce() method call the function for each element of array and proceed further with the previous result and return a single value
let lengthSum = lengths.reduce((acc, i) => {
  return acc + i;
});
console.log(lengthSum);

// Check is the given value is array or not
console.log(Array.isArray(lengths));
console.log(Array.isArray(lengthSum));
