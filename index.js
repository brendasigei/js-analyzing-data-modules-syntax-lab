


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

require("datejs");
const combineUsers = require("./index"); // use { combineUsers } if you export with curly braces

describe("combineUsers", () => {
  test("merges multiple arrays into the users key", () => {
    const result = combineUsers(["alice", "bob"], ["carol"], ["dave", "erin"]);
    expect(result.users).toEqual(["alice", "bob", "carol", "dave", "erin"]);
  });

  test("works with a single array", () => {
    expect(combineUsers(["alice"]).users).toEqual(["alice"]);
  });

  test("works with no arrays", () => {
    expect(combineUsers().users).toEqual([]);
  });

  test("adds merge_date in M/d/yyyy format", () => {
    const result = combineUsers(["alice"]);
    expect(result.merge_date).toBe(new Date().toString("M/d/yyyy"));
    expect(result.merge_date).toMatch(/^\d{1,2}\/\d{1,2}\/\d{4}$/);
  });