/**
 * Task description: Write a method to convert a string into camel case.
 * Expected Result: (JavaScript exercises) => "JavaScriptExercises"
 * Task Complexity: 1 of 5
 */

const str = "JavaScript exercises";
const camelize = (str) => {
  let string = _.camelCase(str);
  return string;
};
console.log(camelize(str)); // "JavaScriptExercises"
