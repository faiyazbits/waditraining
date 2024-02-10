/**
 * Task description: Write a method that creates to capitalize the first letter of each word in a string.
 * Expected Result: (js string exercises) => "Js String Exercises"
 * Task Complexity: 1 of 5
 */
const capitalize = (str) => {
  let newarray = [];
  let array = str.split(" ");
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    let capitelLetter = word[0];
    let uppercaseWord = capitelLetter.toUpperCase();
    let changeword = replaceChar(word, 0, uppercaseWord);
    newarray.push(changeword);
  }
  return newarray.join(" ");
};
function replaceChar(str, index, char) {
  const array = str.split("");
  array[index] = char;
  return array.join("");
}
const str = "js string exercises";
console.log(capitalize(str)); // "Js String Exercises"

/*-----------------------*/
