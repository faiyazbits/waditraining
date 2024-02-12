/**
 * Task description: Write a method that returns an array composed of nested array
 * Expected Result: {a : 1, b :2, c:3} => [['a', 1], ['b', 2], ['c', 3]]
 * Task Complexity: 2 of 5
 * @param {Object} obj - The object to query.
 * @returns {Array}
 */
const toPairs = (obj) => {
  let result = [];
  for (let k in obj) {
    let array = [];
    let pair1 = k;
    let pair2 = obj[k];
    array.push(pair1, pair2);
    result.push(array);
  }

  return result;
};
const data = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(toPairs(data)); // [['a', 1], ['b', 2], ['c', 3]]
