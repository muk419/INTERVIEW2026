// // ==========================================
// // Shallow Copy vs Deep Copy in JavaScript
// // ==========================================

// /* 
//   1. SHALLOW COPY
//   A shallow copy creates a new object, but inserts references into it to the objects found in the original.
//   - Primitive values (numbers, strings, booleans) are copied by value.
//   - Objects/Arrays inside are copied by reference.
// */

// const original = {
//   name: "Alice",
//   age: 25,
//   details: {
//     city: "New York",
//     hobbies: ["reading", "traveling"]
//   }
// };

// // Method 1: Spread Operator (Shallow Copy)
// const shallowCopy = { ...original };

// // Method 2: Object.assign (Shallow Copy)
// // const shallowCopy2 = Object.assign({}, original);

// console.log("--- Shallow Copy Example ---");
// shallowCopy.name = "Bob"; // Changes only in shallowCopy (primitive)
// shallowCopy.details.city = "Los Angeles"; // Changes in BOTH (nested object is a reference)

// console.log("Original.name:", original.name); // "Alice" (Unaffected)
// console.log("Original city:", original.details.city); // "Los Angeles" (Affected!)


// /* 
//   2. DEEP COPY
//   A deep copy creates a new object and recursively copies everything. 
//   The new object is completely independent of the original.
// */

// const originalDeep = {
//   name: "Charlie",
//   details: {
//     city: "London",
//     scores: [10, 20]
//   }
// };

// // Method 1: JSON.parse(JSON.stringify()) (Common Hack)
// // Limitation: Does not handle Dates, functions, undefined, Infinity, Regex, Maps, Sets.
// const deepCopyJSON = JSON.parse(JSON.stringify(originalDeep));

// // Method 2: structuredClone() (Modern Standard - Node 17+, Browsers)
// // Handles most data types correctly (Dates, Maps, Sets, etc.) EXCEPT functions and DOM nodes.
// const deepCopyStructured = structuredClone(originalDeep);

// console.log("\n--- Deep Copy Example ---");
// deepCopyStructured.name = "Dave";
// deepCopyStructured.details.city = "Paris"; // Changes ONLY in deep copy

// console.log("OriginalDeep name:", originalDeep.name); // "Charlie" (Unaffected)
// console.log("OriginalDeep city:", originalDeep.details.city); // "London" (Unaffected)


// /*
//   SUMMARY:
//   - Use Shallow Copy (spread/Object.assign) when your data is flat (no nested objects) or you want to share nested state.
//   - Use Deep Copy (structuredClone) when you need a completely independent duplicate of complex nested data.
// */
const original = {
  name: "Rahul",
  age: 25,
  address: {
    city: "Mumbai",
    pin: 400001
  }
};

const shallowCopy = { ...original };
// console.log("Shallow Copy:", shallowCopy);


// ============ SHALLOW COPY EXAMPLE ============
const newObject = shallowCopy.address.city = "Delhi";
console.log("New Object:", newObject);
console.log("Shallow Copy:", shallowCopy);
console.log("Original:", original);
// ⚠️ देखो! Original भी बदल गया क्योंकि nested object की reference copy हुई

console.log("\n============================================");
console.log("============ DEEP COPY EXAMPLE ============");
console.log("============================================\n");

// Fresh Original Object बनाते हैं
const original2 = {
  name: "Rahul",
  age: 25,
  address: {
    city: "Mumbai",
    pin: 400001
  }
};

// ✅ Method 1: JSON.parse(JSON.stringify()) - Common तरीका
const deepCopy1 = JSON.parse(JSON.stringify(original2));

// ✅ Method 2: structuredClone() - Modern तरीका (Recommended)
const deepCopy2 = structuredClone(original2);

// अब nested object को बदलते हैं
deepCopy1.address.city = "Delhi";
deepCopy2.address.city = "Kolkata";

console.log("Original2 city:", original2.address.city);  // Mumbai ✅ (Safe!)
console.log("DeepCopy1 city:", deepCopy1.address.city);  // Delhi
console.log("DeepCopy2 city:", deepCopy2.address.city);  // Kolkata

console.log("\n✅ Deep Copy में Original SAFE रहता है!");
