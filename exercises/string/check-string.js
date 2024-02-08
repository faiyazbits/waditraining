/**
 * Task description: Write a method to check whether an `input` is a string or not
 * Expected Result: ( [1, 2, 4, 0]) => false
 * Task Complexity: 1 of 5
 */
const checkIsString = (nums) => {
  if (typeof nums === "string") {
    return true;
  } else {
    return false;
  }
};
const nums = [1, 2, 4, 0];
console.log(checkIsString(nums)); // false
