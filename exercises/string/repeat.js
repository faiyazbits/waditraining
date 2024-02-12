/**
 * Task description: Write a method to concatenates a given string n times
 * Expected Result: (JA) => "JA"
 * Task Complexity: 1 of 5
 */
const repeat = (str, times) => {
  let result = " ";
  for (let i of str) {
    result = str + str;
    str = str + " ";
  }
  return result;
};
const str = "JA";
const times = 2;
console.log(repeat(str, times)); // "JA JA"
