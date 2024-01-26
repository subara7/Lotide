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
