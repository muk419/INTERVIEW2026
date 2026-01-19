const obj = { a: 1, b: 2, c: 3 };
const valuesArray = Object.values(obj);

console.log(valuesArray);
// Output: [1, 2, 3]

const keysArray = Object.keys(obj);

console.log(keysArray);
// Output: ["a", "b", "c"]

// To get values from the keys:
// const valuesFromArrayOfKeys = keysArray.map(key => obj[key]);
// console.log(valuesFromArrayOfKeys);
// Output: [1, 2, 3]
