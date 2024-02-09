/**
 * Task description: Write a method that to converts upper case letters to lower case, and lower case letters to upper case.
 * Expected Result: (AaBbc) => "aAbBC"
 * Task Complexity: 1 of 5
 */
const swapCase = (str) => {
  let array = str.split("");
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    let capitelLetter = word[0];
    let lowercaseWord = capitelLetter.toLowerCase();
    let changeword = replaceChar(word, 0, lowercaseWord);
  }
  console.log(changeword);
};
function replaceChar(str, index, char) {
  const array = str.split("");
  array[index] = char;
  return array.join("");
}
const str = "AaBbc";
swapCase(str); // "aAbBC"
