/**
 * Task description: Write a method that returns an object composed of key-value pairs.
 * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
 * Task Complexity: 2 of 5
 * @param {Array} array - a deep array of pairs
 * @returns {Array}
 */
const fromPairs = (array) => {
  let key = [];
  let value = [];
  for (var i = 0; i < array; i++) {
    for (var j = 0; j < i[0]; j++) {
      if (j === "") {
        return key.push(j);
      } else {
        return value.push(j);
      }
    }
  }
  console.log(key, value);
};
const data = [
  ["a", 1],
  ["b", 2],
];
let value = fromPairs(data); // { 'a': 1, 'b': 2 }
console.log(value);
