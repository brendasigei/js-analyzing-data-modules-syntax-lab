


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};// Step 5: datejs goes outside the function
require('datejs');

// Step 1: function with a rest argument
function combineUsers(...args) {
  // Step 2: initialize the return object
  const combinedObject = {
    users: []
  };

  // Step 3: loop through args to isolate each array
  for (const arr of args) {
    // Step 4: merge with the spread operator
    combinedObject.users = [...combinedObject.users, ...arr];
  }

  // Step 5: add today's date in the M/d/yyyy format
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  // Step 7: return the object
  return combinedObject;
}

// Example
console.log(combineUsers(["alice", "bob"], ["carol", "dave"], ["erin"]));
// { users: ["alice", "bob", "carol", "dave", "erin"], merge_date: "10/24/2026" }

module.exports = combineUsers;

/**
 * Merges any number of username arrays and records the merge date.
 * @param {...string[]} args - Arrays of usernames.
 * @returns {{ users: string[], merge_date: string }} Combined users and date.
 */
function combineUsers(...args) {
  // ...
}