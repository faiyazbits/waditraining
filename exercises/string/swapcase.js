/**
 * Task description: Write a method that to converts upper case letters to lower case, and lower case letters to upper case.
 * Expected Result: (AaBbc) => "aAbBC"
 * Task Complexity: 1 of 5
 */
const swapCase = (str) => {
  let words = str.split("");
  let output = [];
  for (let letter of words) {
    if (letter === letter.toUpperCase()) {
      let smallLetter = letter.toLowerCase();
      output.push(smallLetter);
    } else {
      let capitalLetter = letter.toUpperCase();
      output.push(capitalLetter);
    }
  }

  return output.join("");
};
const str = "AaBbc";
console.log(swapCase(str)); // "aAbBC"
