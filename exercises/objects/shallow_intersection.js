/**
 * Task description: Write a method that finds shallow intersections of objects
 * Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * Task Complexity: 3 of 5
 * @param {Object<string | number>} firstObj - Object with values of primitive data types
 * @param {Object<string | number>} secondObj - Object with values of primitive data types
 * @returns {Object}
 */
const intersection = (firstObject, secondObject) => {
  for (let k in firstObject) {
    for (let i in secondObject) {
      if (firstObject[k].hasOwnProperty(secondObject[i])) {
        return secondObject[i];
      }
    }
  }
};
const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2)); // { b: 2 }
