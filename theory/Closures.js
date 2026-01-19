/**
 * CLOSURES IN JAVASCRIPT
 * 
 * Closure ek bahut powerful concept hai. 
 * Definition: "A closure is a function bundled together with its lexical environment."
 * 
 * Simple words mein: Jab ek function kisi doosre function ke andar define hota hai, 
 * toh woh apne bahar wale (parent) function ke variables ko "yaad" rakhta hai, 
 * bhale hi parent function execute hokar khatam ho chuka ho.
 */

function outerFunction(outerVariable) {
  // Yeh inner function ek closure banata hai
  return function innerFunction(innerVariable) {
    console.log('Outer Variable:', outerVariable);
    console.log('Inner Variable:', innerVariable);
  };
}

const newFunction = outerFunction('outside');
// Yahan outerFunction execute hokar khatam ho gaya...
// Par 'newFunction' abhi bhi 'outerVariable' ko access kar sakta hai!

newFunction('inside');


/**
 * 1. REAL LIFE EXAMPLE: DATA PRIVACY (PRIVATE VARIABLES)
 * Closures ka sabse bada use data ko hidden rakhne ke liye hota hai.
 */

function createCounter() {
  let count = 0; // Yeh variable "private" hai, ise bahar se change nahi kiya ja sakta

  return {
    increment: function () {
      count++;
      console.log("Current Count:", count);
    },
    decrement: function () {
      count--;
      console.log("Current Count:", count);
    }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1

// console.log(count); // Error: count is not defined! (Safety)


/**
 * 2. INTERVIEW TRICKY QUESTION (Closures + Loops)
 */

function x() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log("Tricky Loop with var:", i); // Sab 4 print honge!
    }, i * 1000);
  }
}
// Solution for above: Use 'let' instead of 'var' or use Closure explicitlgity.

function y() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log("Fixed Loop with let:", i); // 1, 2, 3 print honge
    }, i * 1000);
  }
}


/**
 * CONCLUSION:
 * Closures ki wajah se functions ke paas "Memeory" hoti hai. 
 * Woh apne bachpan (lexical scope) ke variables ko kabhi nahi bhoolte!
 */
