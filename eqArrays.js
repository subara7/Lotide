const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const eqArrays = function(arr1, arr2) {
    // Check if arrays have the same length
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // Iterate through elements of both arrays
    for (let i = 0; i < arr1.length; i++) {
      // Check if elements are not equal
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    // If all elements are equal, return true
    return true;
  };
  
  // Test cases
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should PASS
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // should PASS
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // should PASS
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // should PASS
