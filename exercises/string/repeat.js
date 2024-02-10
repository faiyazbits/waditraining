/**
 * Task description: Write a method to concatenates a given string n times
 * Expected Result: (JA) => "JA"
 * Task Complexity: 1 of 5
 */
const repeat = (str, times) => {
  for (let i = 1; i < times; i++) {
    let word = str + " ";
    let letters = word.repeat(times);

    console.log(letters);
  }
};
const str = "JA";
const times = 2;
repeat(str, times); // "JA JA"

/*------------------------------*/
