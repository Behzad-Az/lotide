const findKey = function(obj, callback) {
  for (const [key, val] of Object.entries(obj)) {
    if (callback(val)) {
      return key;
    }
  }
  return;
};

const key = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 20); // => "noma"

console.log(key);
