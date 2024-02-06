/**
 * Task description: Write a method that creates to capitalize the first letter of each word in a string.
 * Expected Result: (js string exercises) => "Js String Exercises"
 * Task Complexity: 1 of 5
 */
const capitalize = (str) => {
  function capitalize(str) {
    var words = str.toLowerCase().split(" ");
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
  }
};
const str = "js string exercises";
console.log(capitalize(str)); // "Js String Exercises"
