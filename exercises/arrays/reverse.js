/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */
// const reverse = (array) => {
//   for (let i = 3; i < array.length; i--) {
//     revered_array.push(array);
//   }
// };
// const data = [1, 2, 3];
// console.log(reverse(data)); // [3, 2, 1]

let original_array = [1, 2, 3, 4];

let reversed_array = [];

console.log("Original Array: ");
console.log(original_array);

for (let i = original_array.length - 1; i >= 0; i--) {
  reversed_array.push(original_array[i]);
}

console.log("Reversed Array: ");
console.log(reversed_array);
