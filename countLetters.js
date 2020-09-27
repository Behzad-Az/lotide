// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(str) {
  let results = {};
  for (const letter of str) {
    // console.log("i'm here:", letter);
    results[letter] = results[letter] === undefined ? 1 : results[letter] + 1;
  }
  return results;
};

const results = countLetters("mississippi");

// // TEST CODE
assertEqual(results["m"], 1);
assertEqual(results["i"], 4);
assertEqual(results["s"], 4);
assertEqual(results["p"], 2);
assertEqual(results["q"], undefined);
