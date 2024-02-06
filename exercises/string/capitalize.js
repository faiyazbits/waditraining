/**
 * Task description: Write a method that creates to capitalize the first letter of each word in a string.
 * Expected Result: (js string exercises) => "Js String Exercises"
 * Task Complexity: 1 of 5
 */
const capitalize = (str) => {
  let s = str.split(" ");
  let n = [];
  for (let i = 0; i < s.length; i++) {
    let f = s[i];
    let word = f[0].toUpperCase();

    console.log(word);
  }
};
const str = "js string exercises";
capitalize(str); // "Js String Exercises"
console.log(word);
