const raisinAlarm = function (cookie) {
  if (cookie.includes("🍇")) {
    return "Raisin alert!";
  } else {
    return "All good!";
  }
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"])); // Raisin alert!
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"])); // Raisin alert!
console.log(raisinAlarm(["🍫", "🍫", "🍫"])); // All good!
