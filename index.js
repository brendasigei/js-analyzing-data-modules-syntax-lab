// Step 5: datejs goes outside the function
require('datejs');

// Step 1: rest argument collects any number of arrays
function combineUsers(...args) {
  // Step 2: initialize the return object
  const combinedObject = {
    users: [],
  };

  // Step 3: loop through each array of usernames
  for (const userArray of args) {
    // Step 4: spread to merge into the users attribute
    combinedObject.users = [...combinedObject.users, ...userArray];
  }

  // Step 5: add today's date in M/d/yyyy format
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Step 7: return the object
  return combinedObject;
}

// Export so it works with either import style
module.exports = combineUsers;
module.exports.combineUsers = combineUsers;