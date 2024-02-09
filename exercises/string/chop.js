/**
 * Task description: Write a method that to chop a string into chunks of a given length
 * Expected Result: (javascript) =>  ["ja", "va", "sc", "ri", "pt"]
 * Task Complexity: 1 of 5
 */
const chop = (str, chunk) => {
  let newarray = str.split(chunk);
  console.log(newarray);
};
const str = "javascript";
const chunk = 2;
chop(str, chunk); // ["ja", "va", "sc", "ri", "pt"]
