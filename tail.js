// FUNCTION IMPLEMENTATION
const assertArrEqual = function(actual, expected) {
  let output = true;
  if (actual.length === expected.length) {
    actual.forEach((element, index) => {
      if (element !== expected[index]) {
        output = false;
      }
    });
  } else {
    output = false;
  }
  output ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const tail = array => array.length > 1 ? array.slice(1, array.length) : [];

// TEST CODE
assertArrEqual(tail([]), []);
assertArrEqual(tail([1, 2, 3, 5]), [2, 3, 5]);
assertArrEqual(tail([1]), []);
