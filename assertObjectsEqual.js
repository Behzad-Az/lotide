const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  eqObjects(obj1, obj2) ?
    console.log(`✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`) :
    console.log(`❌ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
};

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

const eqObjects = function(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  } else {
    for (const key of obj1Keys) {
      if (obj1[key] instanceof Array) {
        if (obj2[key] instanceof Array) {
          if (!eqArrays(obj1[key], obj2[key])) {
            return false;
          }
        } else {
          return false;
        }
      }
      else if (obj1[key] instanceof Object) {
        if (obj2[key] instanceof Object) {
          if (!eqObjects(obj1[key], obj2[key])) {
            return false;
          }
        } else {
          return false;
        }
      }
      else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const ef = {e: 1, f: {x: "hello", y: {z: 2}, q: ["yoyo", 3]}, t: ["follow"]};
const fe = {e: 1, f: {x: "hello", y: {z: 2}, q: ["yoyo", 3]}, t: ["follow"]};
const fe2 = {e: 1, f: {x: "hello", y: {z: 3}, q: ["yoyo", 3]}, t: ["follow"]};

// TEST CODE
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
assertObjectsEqual(ef, fe);
assertObjectsEqual(fe, fe2);
