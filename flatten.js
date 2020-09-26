const inputArr = [1, [2, 3], [4, 'five', 'six', [7, 8]], 9, [10]];

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

const flatten = function(inputArr, outputArr = []) {
  inputArr.forEach(element => {
    if (Array.isArray(element)) {
      flatten(element, outputArr);
    } else {
      outputArr.push(element);
    }
  });
  return outputArr;
};

// TEST CODE
assertArraysEqual(flatten(inputArr), [1, 2, 3, 4, 'five', 'six', 7, 8, 9, 10]);
