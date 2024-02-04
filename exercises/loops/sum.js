/**
 * Task description: Write a method that to get the sum of all the numbers in an array.
 * Expected Result: ([3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]) => 276
 * Task Complexity: 1 of 5
 */
const sum = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};
const numbers = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
sum(numbers); // 276
