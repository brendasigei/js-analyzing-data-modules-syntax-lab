
const combineUsers = require("../index");

describe("combineUsers", () => {
  test("merges multiple arrays of usernames", () => {
    const result = combineUsers(
      ["brenda", "joy"],
      ["kevin", "mary"]
    );

    expect(result.users).toEqual([
      "brenda",
      "joy",
      "kevin",
      "mary",
    ]);
  });

  test("returns an empty users array when no arrays are provided", () => {
    const result = combineUsers();

    expect(result.users).toEqual([]);
  });

  test("includes the merge date in M/d/yyyy format", () => {
    const result = combineUsers(["brenda"]);

    expect(result.merge_date).toMatch(
      /^\d{1,2}\/\d{1,2}\/\d{4}$/
    );
  });
});
