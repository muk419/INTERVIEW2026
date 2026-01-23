/**
 * ============================================
 * DESTRUCTURING IN JAVASCRIPT - COMPLETE GUIDE
 * ============================================
 * 
 * Destructuring क्या है?
 * ----------------------
 * Destructuring एक JavaScript expression है जो arrays या objects से 
 * values को unpack करके distinct variables में assign करने देता है।
 * 
 * ES6 (ECMAScript 2015) में introduce हुआ।
 * 
 * Simple Words में:
 * "Object या Array से values निकालकर variables में store करना"
 */


// ===========================================
// 1. ARRAY DESTRUCTURING
// ===========================================

// ---- Basic Array Destructuring ----
const colors = ['red', 'green', 'blue'];

// Without Destructuring (Old Way)
const first = colors[0];
const second = colors[1];
const third = colors[2];

// With Destructuring (New Way)
const [color1, color2, color3] = colors;
console.log(color1); // 'red'
console.log(color2); // 'green'
console.log(color3); // 'blue'


// ---- Skipping Elements ----
const numbers = [1, 2, 3, 4, 5];

// Skip 2nd and 4th elements using empty commas
const [a, , c, , e] = numbers;
console.log(a, c, e); // 1, 3, 5


// ---- Default Values ----
const fruits = ['apple'];

// अगर array में value नहीं है तो default value use होगी
const [fruit1, fruit2 = 'banana'] = fruits;
console.log(fruit1); // 'apple'
console.log(fruit2); // 'banana' (default value)


// ---- Rest Operator with Array Destructuring ----
const nums = [1, 2, 3, 4, 5, 6];

// पहले 2 elements अलग, बाकी सब rest में
const [x, y, ...rest] = nums;
console.log(x);    // 1
console.log(y);    // 2
console.log(rest); // [3, 4, 5, 6]


// ---- Swapping Variables ----
let m = 10;
let n = 20;

// Without destructuring (need temp variable)
// let temp = m;
// m = n;
// n = temp;

// With destructuring (one line!)
[m, n] = [n, m];
console.log(m, n); // 20, 10


// ---- Nested Array Destructuring ----
const nestedArray = [1, [2, 3], 4];

const [p, [q, r], s] = nestedArray;
console.log(p, q, r, s); // 1, 2, 3, 4



// ===========================================
// 2. OBJECT DESTRUCTURING
// ===========================================

// ---- Basic Object Destructuring ----
const person = {
  name: 'Rahul',
  age: 25,
  city: 'Mumbai'
};

// Without Destructuring (Old Way)
const personName = person.name;
const personAge = person.age;

// With Destructuring (New Way)
const { name, age, city } = person;
console.log(name); // 'Rahul'
console.log(age);  // 25
console.log(city); // 'Mumbai'


// ---- Renaming Variables ----
// जब आप different variable name चाहते हो
const user = {
  userName: 'john_doe',
  userEmail: 'john@example.com'
};

// Syntax: { originalKey: newVariableName }
const { userName: username, userEmail: email } = user;
console.log(username); // 'john_doe'
console.log(email);    // 'john@example.com'
// Note: userName and userEmail variables DO NOT exist here


// ---- Default Values in Objects ----
const settings = {
  theme: 'dark'
};

// mode property exist नहीं करती, तो default value use होगी
const { theme, mode = 'auto' } = settings;
console.log(theme); // 'dark'
console.log(mode);  // 'auto' (default)


// ---- Renaming + Default Values (Combined) ----
const config = {
  apiUrl: 'https://api.example.com'
};

const { apiUrl: url, timeout: requestTimeout = 5000 } = config;
console.log(url);            // 'https://api.example.com'
console.log(requestTimeout); // 5000 (default)


// ---- Rest Operator with Object Destructuring ----
const employee = {
  id: 101,
  empName: 'Priya',
  department: 'Engineering',
  salary: 50000,
  location: 'Delhi'
};

// id और name अलग, बाकी सब otherDetails में
const { id, empName: employeeName, ...otherDetails } = employee;
console.log(id);           // 101
console.log(employeeName); // 'Priya'
console.log(otherDetails); // { department: 'Engineering', salary: 50000, location: 'Delhi' }


// ---- Nested Object Destructuring ----
const company = {
  companyName: 'Tech Corp',
  address: {
    street: '123 Main St',
    cityName: 'Bangalore',
    pincode: 560001
  },
  employees: 500
};

// Nested destructuring - address के अंदर की values निकालना
const {
  companyName,
  address: { street, cityName, pincode },
  employees
} = company;

console.log(companyName); // 'Tech Corp'
console.log(street);      // '123 Main St'
console.log(cityName);    // 'Bangalore'
console.log(pincode);     // 560001



// ===========================================
// 3. FUNCTION PARAMETER DESTRUCTURING
// ===========================================

// ---- Object Destructuring in Function Parameters ----
function displayUser({ userName2, userAge, userCity = 'Unknown' }) {
  console.log(`Name: ${userName2}, Age: ${userAge}, City: ${userCity}`);
}

const userData = { userName2: 'Amit', userAge: 30 };
displayUser(userData);
// Output: Name: Amit, Age: 30, City: Unknown


// ---- Array Destructuring in Function Parameters ----
function getFirstTwo([first2, second2]) {
  return { first: first2, second: second2 };
}

console.log(getFirstTwo([10, 20, 30, 40]));
// Output: { first: 10, second: 20 }


// ---- Returning Multiple Values from Function ----
function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

const [min, max] = getMinMax([5, 2, 9, 1, 7]);
console.log(min, max); // 1, 9



// ===========================================
// 4. PRACTICAL USE CASES (Interview Important!)
// ===========================================

// ---- Use Case 1: API Response Handling ----
const apiResponse = {
  status: 200,
  data: {
    users: [{ id: 1, userName4: 'John' }],
    total: 100
  },
  message: 'Success'
};

const {
  status,
  data: { users, total },
  message
} = apiResponse;

console.log(status);  // 200
console.log(users);   // [{ id: 1, name: 'John' }]
console.log(total);   // 100


// ---- Use Case 2: React Props (Common in React) ----
// function UserCard({ name, age, avatar }) {
//     return <div>{name} - {age}</div>;
// }


// ---- Use Case 3: Import Specific Functions ----
// const { useState, useEffect } = require('react');
// or
// import { useState, useEffect } from 'react';


// ---- Use Case 4: Loop with Destructuring ----
const usersList = [
  { id: 1, userName3: 'Alice', score: 85 },
  { id: 2, userName3: 'Bob', score: 92 },
  { id: 3, userName3: 'Charlie', score: 78 }
];

// Array of objects पर loop करते हुए destructure
for (const { userName3, score } of usersList) {
  console.log(`${userName3} scored ${score}`);
}
// Output:
// Alice scored 85
// Bob scored 92
// Charlie scored 78


// ---- Use Case 5: Destructuring with map() ----
const products = [
  { productId: 'P1', productName: 'Laptop', price: 50000 },
  { productId: 'P2', productName: 'Phone', price: 20000 }
];

const productNames = products.map(({ productName }) => productName);
console.log(productNames); // ['Laptop', 'Phone']



// ===========================================
// 5. COMMON INTERVIEW QUESTIONS
// ===========================================

/**
 * Q1: Array और Object Destructuring में क्या difference है?
 * 
 * Array Destructuring:
 * - Position based होती है (order matter करता है)
 * - Square brackets [] use होते हैं
 * - Variable names कुछ भी हो सकते हैं
 * 
 * Object Destructuring:
 * - Key based होती है (order matter नहीं करता)
 * - Curly braces {} use होते हैं
 * - Variable names object keys से match होने चाहिए (or use renaming)
 */

// Example:
const arr = [1, 2, 3];
const [firstItem, secondItem] = arr; // Position based

const obj = { firstName: 'John', lastName: 'Doe' };
const { lastName, firstName } = obj; // Key based (order doesn't matter)


/**
 * Q2: Destructuring के advantages क्या हैं?
 * 
 * 1. Cleaner Code - Less verbose, more readable
 * 2. Multiple Assignment - एक line में multiple variables
 * 3. Easy Swapping - Variables swap करना आसान
 * 4. Default Values - Missing values के लिए defaults
 * 5. Selective Extraction - सिर्फ required values निकालना
 */


/**
 * Q3: क्या Destructuring mutate करता है original array/object को?
 * 
 * नहीं! Destructuring सिर्फ values को copy करता है।
 * Original array/object unchanged रहता है।
 */

const originalArray = [1, 2, 3];
const [firstEl] = originalArray;
console.log(originalArray); // [1, 2, 3] - unchanged!


/**
 * Q4: null या undefined को destructure करने पर क्या होगा?
 * 
 * TypeError आएगी! इसलिए default value देना important है।
 */

// This will throw error:
// const { prop } = null; // TypeError!

// Safe way with default:
function safeDestructure(obj = {}) {
  const { safeProp = 'default' } = obj;
  return safeProp;
}


/**
 * Q5: Computed Property Names के साथ Destructuring
 */
const key = 'dynamicKey';
const dynamicObj = { dynamicKey: 'Dynamic Value!' };

// Dynamic key से destructure करना
const { [key]: dynamicValue } = dynamicObj;
console.log(dynamicValue); // 'Dynamic Value!'



// ===========================================
// 6. SUMMARY CHEAT SHEET
// ===========================================

/**
 * ARRAY DESTRUCTURING:
 * const [a, b] = [1, 2]           → Basic
 * const [a, , b] = [1, 2, 3]      → Skip elements
 * const [a = 10] = []             → Default value
 * const [a, ...rest] = [1,2,3]    → Rest operator
 * [a, b] = [b, a]                 → Swap
 * 
 * OBJECT DESTRUCTURING:
 * const { a, b } = { a: 1, b: 2 } → Basic
 * const { a: x } = { a: 1 }       → Rename
 * const { a = 10 } = {}           → Default value
 * const { a, ...rest } = obj      → Rest operator
 * const { a: { b } } = obj        → Nested
 * 
 * FUNCTION PARAMETERS:
 * function fn({ a, b }) {}        → Object params
 * function fn([a, b]) {}          → Array params
 */


console.log('✅ Destructuring concepts loaded successfully!');
