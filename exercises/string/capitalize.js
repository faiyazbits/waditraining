/**
 * Task description: Write a method that creates to capitalize the first letter of each word in a string.
 * Expected Result: (js string exercises) => "Js String Exercises"
 * Task Complexity: 1 of 5
 */
const capitalize = (str) => {
  let wordArray = [];
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let letter = words[i];
    let wordFirstLetter = letter[0];
    let capitalesLetter = wordFirstLetter.toUpperCase();
    let changed = replaceChar(letter, 0, capitalesLetter);
    wordArray.push(changed);
  }
  return wordArray.join(" ");
};
const str = "js string exercises";
let result = capitalize(str);
console.log(result);

function replaceChar(str, index, char) {
  const array = str.split("");

  array[index] = char;

  // finally, convert the array back to a string
  return array.join("");
}
