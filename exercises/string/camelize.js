/**
 * Task description: Write a method to convert a string into camel case.
 * Expected Result: (JavaScript exercises) => "JavaScriptExercises"
 * Task Complexity: 1 of 5
 */
const camelize = (str) => {
  let words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let firstCharecter = word[0];
    let capitalLetter = firstCharecter.toUpperCase();
    let changedWord = replaceChar(word, 0, capitalLetter);
    result.push(changedWord);
  }
  return result.join("");
};
function replaceChar(str, index, char) {
  const array = str.split("");

  array[index] = char;

  return array.join("");
}

const str = "JavaScript exercises";
console.log(camelize(str)); // "JavaScriptExercises"
