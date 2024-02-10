/**
 * Task description: Write a method that reverts input array
 * Expected Result: [1, 2, 3] => [3, 2, 1]
 * Task Complexity: 1 of 5
 * @param {Array} array - Array of any elements
 * @returns {Array}
 */
const reverse = (array) => {
  for (let i = array.length; i >= 1; i--) {
    console.log(i);
  }
};
const data = [1, 2, 3];
reverse(data); // [3, 2, 1]

/*------------------*/
