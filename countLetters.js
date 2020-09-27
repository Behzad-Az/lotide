// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(str) {
  let letterCounts = {};
  for (const letter of str) {
    // console.log("i'm here:", letter);
    letterCounts[letter] = letterCounts[letter] === undefined ? 1 : letterCounts[letter] + 1;
  }
  return letterCounts;
};

letterCounts = countLetters("mississippi");

// // TEST CODE
assertEqual(letterCounts["m"], 1);
assertEqual(letterCounts["i"], 4);
assertEqual(letterCounts["s"], 4);
assertEqual(letterCounts["p"], 2);
assertEqual(letterCounts["q"], undefined);
