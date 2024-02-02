const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

// Test cases
const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const result1 = findKey(restaurants, x => x.stars === 2);
assertEqual(result1, "noma"); // Should pass

const result2 = findKey(restaurants, x => x.stars === 3);
assertEqual(result2, "Akaleri"); // Should pass

const result3 = findKey(restaurants, x => x.stars === 4);
assertEqual(result3, undefined); // Should pass
