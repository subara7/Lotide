const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const flatten = function(array) {
    let flattenedArray = [];
  
    for (let element of array) {
      if (Array.isArray(element)) {
        flattenedArray = flattenedArray.concat(element);
      } else {
        flattenedArray.push(element);
      }
    }
  
    return flattenedArray;
  };
  
  // Test case
  const result = flatten([1, 2, [3, 4], 5, [6]]);
  assertEqual(JSON.stringify(result), JSON.stringify([1, 2, 3, 4, 5, 6]));
