const words = ["ground", "control", "to", "major", "tom"];
const map = function(arr, callback) {
  let results = [];
  for (const item of arr) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);
