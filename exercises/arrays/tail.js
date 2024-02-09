/**
 * Task description: Get all but the first element of array.
 * Expected Result: [1, 2, 3] => [2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - The array to query.
 * @returns {Array}
 */
const tail = (array) => {
  array.shift();
  console.log(array);
};
const data = [1, 2, 3];

tail(data);
