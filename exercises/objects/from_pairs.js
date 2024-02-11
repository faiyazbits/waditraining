/**
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Task Complexity: 2 of 5
 * @param {Array} array - a deep array of pairs
 * @returns {Array}
 */
const fromPairs = (array) => {
  let result = {};
  for (let i = 0; i < array.length; i++) {
    let pair = array[i];
    let key = pair[0];
    let value = pair[1];
    result[key] = value;
  }

  return result;
};

const data = [
  ["a", 1],
  ["b", 2],
];
console.log(fromPairs(data)); // { 'a': 1, 'b': 2 }
