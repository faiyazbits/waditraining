/**
 * Task description: Write a method that to print a even number upto a size only without conditional statement using loop.
 * Expected Result: (15) => 0,2,4,6,8,10,12,14
 * Task Complexity: 1 of 5
 */
const printEvenNumbers = (size) => {
  for (let i = 0; i <= size; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};
const size = 15;
console.log(printEvenNumbers(size)); // 0,2,4,6,8,10,12,14
