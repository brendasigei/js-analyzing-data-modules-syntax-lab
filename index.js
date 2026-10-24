require("datejs");

function combineUsers(...args) {
  // Initialize the return object
  const combinedObject = {
    users: [],
  };

  // Loop through args to isolate each array
  for (const userArray of args) {
    // Merge arrays together with the spread operator
    combinedObject.users = [...combinedObject.users, ...userArray];
  }

  // Add today's date in M/d/yyyy format using datejs
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  // Return the object
  return combinedObject;
}

module.exports = combineUsers;