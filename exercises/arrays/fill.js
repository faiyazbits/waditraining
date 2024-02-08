/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 */
const fill = (arraySize, value) => {
  let array = [];
  for (let i = 0; i < arraySize; i++) {
    array.push(value);
  }
  return array;
};
const data = 3;
const valueToFill = "a";
console.log(fill(data, valueToFill)); // ['a', 'a', 'a']
