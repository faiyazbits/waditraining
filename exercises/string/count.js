/**
 * Task description: Write a method to count the occurrence of a substring in a string
 * Expected Result: (The quick brown fox jumps over the lazy dog) => 2
 * Task Complexity: 1 of 5
 */
const count = (str, wordToFind) => {
  let splitStr = str.split(" ");
  let count = 0;
  for (let i = 0; i <= splitStr.length; i++) {
    if (i === wordToFind) {
      count++;
    }
    return count;
  }
};
const str = "The quick brown fox jumps over the lazy dog";
const wordToFind = "the";
console.log(count(str, wordToFind)); // 2
