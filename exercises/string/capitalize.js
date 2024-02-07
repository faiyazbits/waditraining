/**
 * Task description: Write a method that creates to capitalize the first letter of each word in a string.
 * Expected Result: (js string exercises) => "Js String Exercises"
 * Task Complexity: 1 of 5
 */
const capitalize = (str) => {
  let words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let fCharecter = word[0];
    let capitalLetter = fCharecter.toUpperCase();
    let changedWord = replaceChar(word, 0, capitalLetter);
    result.push(changedWord);
  }
  return result.join(" ");
};
function replaceChar(str, index, char) {
  const array = str.split("");

  array[index] = char;

  return array.join("");
}
const str = "js string exercises";
console.log(capitalize(str)); // "Js String Exercises"
