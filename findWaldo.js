// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      if (name === "Waldo") {
        found(i); // execute callback with index as an argument
      }
    }
  };
  
  const actionWhenFound = function(index) {
    console.log(`Found Waldo at index ${index}!`);
  };
  
  // Run the code
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
