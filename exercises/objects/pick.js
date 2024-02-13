/**
 * Task description: Creates an object composed of the picked object properties.
 * Expected Result: { 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c'] => { 'a': 1, 'c': 3 }
 * Task Complexity: 1 of 5
 * @param {Object} data - The source object
 * @param {Array} paths - TThe property paths to pick.
 * @returns {Object}
 */
const pick = (data, paths) => {
  let result = {};
  for (let k in data) {
    for (let i of paths) {
      if (k === i) {
        result[k] = i;
      }
    }
  }

  return result;
};
const data = {
  a: 1,
  b: 2,
  c: 3,
};
const paths = ["a", "c"];

console.log(pick(data, paths)); // { 'a': 1, 'c': 3 }
