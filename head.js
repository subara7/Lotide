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
const head = function(array) {
    return array[0];
  };
  
  // TEST CASES
  const testArray1 = [1, 2, 3];
  const testArray2 = ["apple", "banana", "orange"];
  const testArray3 = [];
  
  assertEqual(head(testArray1), 1); // This should pass
  assertEqual(head(testArray2), "apple"); // This should pass
  assertEqual(head(testArray3), undefined); // This should pass, as the array is empty
  assertEqual(head([]), undefined); // This should pass, testing with an empty array
