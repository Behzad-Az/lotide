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

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3], true);
