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
  let firstProp = data.a;
  let secondProp = Object.keys(data);
  data = secondProp;
  console.log(secondProp[0]);
};
const data = {
  a: 1,
  b: 2,
  c: 3,
};
const paths = ["a", "c"];

pick(data, paths); // { 'a': 1, 'c': 3 }

function replaceChar(str, index, char) {
  const array = str.split("");

  array[index] = char;

  // finally, convert the array back to a string
  return array.join("");
}
