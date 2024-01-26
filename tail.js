// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
  
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // This should print 🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp
assertEqual(1, 1); // This should print ✅✅✅ Assertion Passed: 1 === 1

// FUNCTION IMPLEMENTATION
const tail = function(array) {
  return array.slice(1);
};
  
const assertEqualArrays = function(actual, expected) {
  const actualString = JSON.stringify(actual);
  const expectedString = JSON.stringify(expected);
  
  if (actualString === expectedString) {
    console.log(`✅✅✅ Assertion Passed: ${actualString} === ${expectedString}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualString} !== ${expectedString}`);
  }
};
  
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
  
// Test Case: Array with only one element
const singleElementArray = ["Single"];
assertEqualArrays(tail(singleElementArray), []); // tail of a single element array should be an empty array
  
// Test Case: Empty array
const emptyArray = [];
assertEqualArrays(tail(emptyArray), []); // tail of an empty array should be an empty array
