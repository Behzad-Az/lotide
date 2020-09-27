// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (const val of allItems) {
    if (itemsToCount.hasOwnProperty(val) && itemsToCount[val]) {
      results[val] = results[val] === undefined ? 1 : results[val] + 1;
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// // TEST CODE
assertEqual(result["Jason"], 1);
assertEqual(result["Karima"], undefined);
assertEqual(result["Fang"], 2);
assertEqual(result["Agouhanna"], undefined);
