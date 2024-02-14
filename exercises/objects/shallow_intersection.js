/**
 * Task description: Write a method that finds shallow intersections of objects
 * Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * Task Complexity: 3 of 5
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {Object}
 */
// export
const intersection = (data, data2) => {
  let result = {};
  let firstElement = Object.keys(data);
  let secondElement = Object.keys(data2);
  if (firstElement[1] === secondElement[1]) {
  }
};
const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
intersection(data, data2); // { b: 2 }
// firstObject;secondObject;
