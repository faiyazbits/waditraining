/**
 * Task description: Write a method to creates a slice of array with n elements dropped from the beginning.
 * Expected Result: [1, 2, 3, 4] => [3, 4]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @param {Number} elementToDrop - number of elements to drop.
 * @returns {Array}
 */
const drop = (array, elementsToDrop) => {
  let newarray = array.slice(2);
  console.log(newarray);
};
const data = [1, 2, 3, 4];
const elementsToDrop = 2;

drop(data, elementsToDrop); // [3, 4]
