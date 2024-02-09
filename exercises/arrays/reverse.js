/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */ let reversed_Array = [];
const reverse = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    reversed_Array.push(array[i]);
  }
  console.log(reversed_Array);
};
const data = [1, 2, 3];
reverse(data); // [3, 2, 1]
