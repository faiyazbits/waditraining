/**
 * Task description: Get all but the first element of array.
 * Expected Result: [1, 2, 3] => [2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - The array to query.
 * @returns {Array}
 */
const tail = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 1) {
      result.push(array[i]);
    }
  }
  return result;
};
const data = [1, 2, 3];

console.log(tail(data)); // [2, 3]
