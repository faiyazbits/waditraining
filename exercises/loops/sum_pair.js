/**
  * Task description: Write a method that to add up each element in the same position and
    create a new array containing the sum of each pair. 
    If the arrays are of different size. then consider the non existing elements to be zero
  * Expected Result: ([4, 6, 7],[8, 1, 9]) => [12, 7, 16]
  * Task Complexity: 1 of 5
*/
const sumOfPairs = (num1, num2) => {
  let sum = [];
  for (let i = 0; i <= num1.length - 1; i++) {
    sum.push(num1[i] + num2[i]);
  }
  return sum;
};
let num1 = [4, 6, 7];
let num2 = [8, 1, 9];
console.log(sumOfPairs(num1, num2)); // [12, 7, 16]

/*---------------------------*/
