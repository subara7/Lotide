  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const letterPositions = function(sentence) {
    const results = {};
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
  
      if (char !== ' ') {
        if (results[char]) {
          results[char].push(i);
        } else {
          results[char] = [i];
        }
      }
    }
  
    return results;
  };
