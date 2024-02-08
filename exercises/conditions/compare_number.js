/**
 * Task description: Write a method that check the two number and print the greater one.
 * Expected Result: (c,d) =>  110 is greater than 100,
 * Task Complexity: 1 of 5
 * @param c
 * @param d
 * @returns {string}
 */
const compareNumber = (n1, n2) => {
  if (n1 < n2) {
    return n2 + " is greater than " + n1;
  } else {
    return n2 + " is not greater than " + n1;
  }
};
const a = 100;
const b = 110;
console.log(compareNumber(a, b)); // 110 is greater than 100
