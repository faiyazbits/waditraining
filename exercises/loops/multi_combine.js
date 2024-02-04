/**
 * Task description: Write a method that to combine elements from 3 arrays to
 * generate a string
 * Expected Result: (['A', 'B', 'C'],['1', '2', '3', '4', '5', '6', '7', '8'],['a', 'e', 'i', 'o', 'u']) => 'A1aB2eC3i4o5u678'
 * Task Complexity: 1 of 5
 * A1aB2eC3i4o5u678
 *
 */
const characters = ["A", "B", "C"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
const vowels = ["a", "e", "i", "o", "u"];

const multi_combine = (characters, numbers, vowels) => {
  const mergedArray = [];

  for (let i = 0; i < characters.length; i++) {
    mergedArray.push(characters[i] + numbers[i] + vowels[i]);
  }
  console.log(mergedArray.join(""));
};

multi_combine(characters, numbers, vowels);
