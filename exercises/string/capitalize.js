/**
 * Task description: Write a method that creates to capitalize the first letter of each word in a string.
 * Expected Result: (js string exercises) => "Js String Exercises"
 * Task Complexity: 1 of 5
 */
const capitalize = (str) => {
  let wordArray = [];
  let word = str.split(" ");
  for (let i = 0; i < word.length; i++) {
    let firstWord = word[i];
    let wordFirstletter = firstWord[0];
    let capitalLetter = wordFirstletter.toUpperCase();
    wordArray.join();
    wordArray.push(capitalLetter);
  }

  console.log(wordArray);
};
const str = "js string exercises";
capitalize(str); // "Js String Exercises"
