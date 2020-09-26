const compareArrElmements = function(arr1, arr2) {
  let equalValCount = 0;
  arr1.forEach((elm, indx) => {
    if (elm === arr2[indx]) {
      equalValCount += 1;
    }
  });
  return equalValCount;
};

const assertArraysEqual = function(actual, expected) {
  actual.length === expected.length && actual.length === compareArrElmements(actual, expected) ?
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const without = function(sourceArr, withoutArr) {
  let outputArr = [];
  sourceArr.forEach(element => {
    if (!withoutArr.includes(element)) {
      outputArr.push(element);
    }
  });
  return outputArr;
};

// TEST CODE
assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
