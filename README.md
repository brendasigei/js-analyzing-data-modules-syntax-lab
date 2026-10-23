# Merge Users

Combines any number of username arrays into one list after a company
merger, and records the date of the merge.

## Setup
npm install
npm test

## Usage
const combineUsers = require("./index");

combineUsers(["alice", "bob"], ["carol"]);
// { users: ["alice", "bob", "carol"], merge_date: "10/24/2026" }

## How it works
1. `combineUsers(...args)` takes any number of username arrays.
2. It creates `combinedObject` with an empty `users` array.
3. It loops through `args`, spreading each array into `users`.
4. It adds `merge_date` (M/d/yyyy, via datejs) and returns the object.