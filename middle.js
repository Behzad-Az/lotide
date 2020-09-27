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

const middle = function(array) {
  const arrayLength = array.length;
  if (arrayLength <= 2) {
    return [];
  } else if (arrayLength % 2) {
    return array.slice(Math.floor(arrayLength / 2), Math.floor(arrayLength / 2) + 1);
  } else {
    return array.slice(arrayLength / 2 - 1, arrayLength / 2 + 1);
  }
};

// TEST CODE
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
