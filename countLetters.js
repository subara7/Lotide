const countLetters = function(sentence) {
    const letterCounts = {};
  
    for (const letter of sentence) {
      if (letter !== ' ') {
        if (letterCounts[letter]) {
          letterCounts[letter]++;
        } else {
          letterCounts[letter] = 1;
        }
      }
    }
  
    return letterCounts;
  };
  
  // Example usage:
  const result = countLetters('LHL');
  console.log(result); // Output: { 'L': 2, 'H': 1 }
