/**
 * Task description: Write a method that creates a new array with given values
 * Expected Result: (3, 'a') => ['a', 'a', 'a']
 * Task Complexity: 1 of 5
 */
const fill = (arraySize, value) => {
  let newarray = [];
  let array = arraySize * value;
  console.log(newarray[array]);
};
const data = 3;
const valueToFill = "a";
fill(data, valueToFill); // ['a', 'a', 'a']
