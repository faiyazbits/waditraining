/**
 * Task description: Write a method that returns an array composed of nested array
 * Expected Result: {a : 1, b :2, c:3} => [['a', 1], ['b', 2], ['c', 3]]
 * Task Complexity: 2 of 5
 * @param {Object} obj - The object to query.
 * @returns {Array}
 */
const toPairs = (obj) => {
  let array = [];
  for (let prop in obj) {
    let pairs = obj[0];
    let key = pairs[0];
    let value = pairs[1];
    array[key] = value;
  }
  return array;
};
const data = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(toPairs(data)); // [['a', 1], ['b', 2], ['c', 3]]
