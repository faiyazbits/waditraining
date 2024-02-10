/**
 * Task description: Write a method to convert a string into camel case.
 * Expected Result: (JavaScript exercises) => "JavaScriptExercises"
 * Task Complexity: 1 of 5
 */

// /////////////
const camelize = (str) => {
  let wordArray = [];
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let wordFirstLetter = word[0];
    let capitalesLetter = wordFirstLetter.camelize();
    let changed = replaceChar(word, 0, capitalesLetter);
    wordArray.push(changed);
  }
  return wordArray.join("");
};
console.log(camelize(str)); // "JavaScriptExercises"

function replaceChar(str, index, char) {
  const array = str.split("");

  array[index] = char;

  return array.join("");
}
