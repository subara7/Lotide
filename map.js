const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      console.log('item BEFORE: ', item);
      const transformedItem = callback(item);
      console.log('item AFTER: ', transformedItem);
      results.push(transformedItem);
      console.log('---');
    }
    return results;
  };
  
  // Example usage:
  const words = ["ground", "control", "to", "major", "tom"];
  const results1 = map(words, word => word[0]);
  console.log(results1);
