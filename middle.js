const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const middle = function(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  if (length <= 2) {
    return [];
  } else if (length % 2 === 1) {
    return [array[middleIndex]];
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
  }
};

// Test cases
assertArraysEqual(middle([1]), []); // should PASS
assertArraysEqual(middle([1, 2]), []); // should PASS

assertArraysEqual(middle([1, 2, 3]), [2]); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // should PASS

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // should PASS
