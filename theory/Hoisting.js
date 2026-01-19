/**
 * HOISTING IN JAVASCRIPT
 * 
 * Hoisting ek mechanism hai jahan variables aur functions ki declarations 
 * unki scope ke top par move kar di jati hain execution phase se pehle.
 * 
 * 1. VARIABLE HOISTING (var):
 * 'var' ke saath declaration hoist hoti hai aur memory mein 'undefined' store hota hai.
 */

console.log(a); // Output: undefined (Error nahi ayega)
var a = 10;

/**
 * 2. VARIABLE HOISTING (let / const):
 * 'let' aur 'const' bhi hoist hote hain, par wo "Temporal Dead Zone" (TDZ) mein rehte hain.
 * Unhe initialization se pehle access karne par 'ReferenceError' aata hai.
 */

try {
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 20;
} catch (e) {
  console.log("Error logic for let:", e.message);
}

/**
 * 3. FUNCTION HOISTING:
 * Normal function declarations poori tarah hoist ho jati hain.
 * Aap function ko define karne se pehle call kar sakte hain.
 */

greet(); // Output: Hello World!

function greet() {
  console.log("Hello World!");
}

/**
 * 4. FUNCTION EXPRESSIONS & ARROW FUNCTIONS:
 * Inhe variable ki tarah treat kiya jata hai, isliye hoisting behaviour 
 * 'var' ya 'let/const' jaisa hota hai.
 */

try {
  myFunc(); // TypeError: myFunc is not a function (agar var ho)
  var myFunc = () => console.log("Hi");
} catch (e) {
  console.log("Error logic for arrow func:", e.message);
}
