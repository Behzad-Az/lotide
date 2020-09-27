const compareElmements = function(arr1, arr2) {
  let equalValCount = 0;
  arr1.forEach((elm, indx) => {
    if (elm === arr2[indx]) {
      equalValCount += 1;
    }
  });
  return equalValCount;
};

const eqArrays = function(arr1, arr2) {
  return (arr1.length === arr2.length && arr1.length === compareElmements(arr1, arr2));
};

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ?
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`) :
    console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
