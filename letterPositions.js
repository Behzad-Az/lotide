const compareElmements = function(arr1, arr2) {
  let equalValCount = 0;
  arr1.forEach((elm, indx) => {
    if (elm === arr2[indx]) {
      equalValCount += 1;
    }
  });
  return equalValCount;
};

const assertArraysEqual = function(actual, expected) {
  actual.length === expected.length && actual.length === compareElmements(actual, expected) ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const getLetterPositions = function(str) {
  let results = {};
  str.split("").forEach((letter, index) => {
    if (letter !== " " && results[letter] === undefined) {
      results[letter] = [index];
    } else if (letter !== " ") {
      results[letter].push(index);
    }
  });
  return results;
};

const results = getLetterPositions("lighthouse in the house");

// TEST CODE
assertArraysEqual(results.l, [0]);
assertArraysEqual(results.i, [1, 11]);
assertArraysEqual(results.g, [2]);
assertArraysEqual(results.h, [3, 5, 15, 18]);
assertArraysEqual(results.t, [4, 14]);
assertArraysEqual(results.o, [6, 19]);
assertArraysEqual(results.u, [7, 20]);
assertArraysEqual(results.s, [8, 21]);
assertArraysEqual(results.e, [9, 16, 22]);
assertArraysEqual(results.n, [12]);
