/**
 * Task description: Write a method that to chop a string into chunks of a given length
 * Expected Result: (javascript) =>  ["ja", "va", "sc", "ri", "pt"]
 * Task Complexity: 1 of 5
 */
const chop = (str, chunk) => {
  let chopedArray = [];
  for (let i = 0; i < str.length; i = i + chunk) {
    chopedArray.push(str.slice(i, i + chunk));
  }
  return chopedArray;
};
const str = "javascript";
const chunk = 2;
console.log(chop(str, chunk)); // ["ja", "va", "sc", "ri", "pt"]
