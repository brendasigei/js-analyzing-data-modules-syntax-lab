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

  test("returns an object with exactly users and merge_date", () => {
    const result = combineUsers(["alice"]);
    expect(Object.keys(result).sort()).toEqual(["merge_date", "users"]);
  });
});