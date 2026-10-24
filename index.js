function mergeUsernames(...usernameArrays) {
  return usernameArrays.flat();
}console.log(mergeUsernames(["alice", "bob"], ["carol"], ["dave", "erin"]));
// ["alice", "bob", "carequire("datejs");rol", "dave", "erin"]

function combineUsers(...args) {
  // Step 2: initialize the return object
  const combinedObject = {
    users: [],
  };

  // Step 3: loop through args to isolate each array
  for (const userArray of args) {
    // Step 4: merge arrays together with the spread operator
    combinedObject.users = [...combinedObject.users, ...userArray];
  }

  // Step 5: add today's date as M/d/yyyy using datejs
  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  // Step 7: return the object
  return combinedObject;
}

module.exports = combineUsers;




