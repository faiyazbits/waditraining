/**
 * Task description: Get all the values from the source object
 * Expected Result: {a :1 ,b:2 : c:3} => [1,2,3]
 * Task Complexity: 1 of 5
 * @param {object} data - The source object
 * @returns {Array}
 */
const values = (data) => {
  let newarray = [];
  for (let prop in data) {
    let values = prop(1);
    newarray.push(values);
  }
  return array;
};
const data = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(values(data)); // [1,2,3]
