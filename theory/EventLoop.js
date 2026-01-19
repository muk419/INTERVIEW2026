/**
 * EVENT LOOP IN JAVASCRIPT
 * 
 * JavaScript is a single-threaded, synchronous language. 
 * Par "Asynchronous" operations (like setTimeout, Promises, API calls) kaise handle hote hain?
 * Wahi kaam "Event Loop" karta hai.
 * 
 * CORE COMPONENTS:
 * 1. Call Stack: Jahan saara code execute hota hai (LIFO - Last In First Out).
 * 2. Web APIs: Browser resources (setTimeout, fetch, DOM events).
 * 3. Callback Queue (Task Queue): setTimeout/setInterval callbacks yahan wait karte hain.
 * 4. Microtask Queue: Promises (`.then`, `.catch`, `async/await`) aur MutationObserver yahan wait karte hain.
 *    (Note: Microtask Queue ki priority Task Queue se zyada hoti hai).
 * 
 * EVENT LOOP KA KAAM:
 * Event Loop lagatar check karta rehta hai ki "Call Stack" empty hai ya nahi.
 * Agar Call Stack empty hai, toh:
 * 1. Pehle Microtask Queue se saare tasks Stack mein bhejta hai.
 * 2. Phir Callback Queue se ek task Stack mein bhejta hai.
 */

console.log("Start"); // 1. Synchronous: Stack mein jayega aur print hoga.

setTimeout(() => {
  console.log("Timeout (Callback Queue)"); // 4. Async: Task Queue mein jayega.
}, 0);

Promise.resolve().then(() => {
  console.log("Promise (Microtask Queue)"); // 3. Async: Microtask Queue mein jayega.
});

console.log("End"); // 2. Synchronous: Stack mein jayega aur print hoga.

/**
 * FINAL OUTPUT ORDER:
 * 1. Start
 * 2. End
 * 3. Promise (Microtask Queue) - High Priority
 * 4. Timeout (Callback Queue) - Low Priority
 */
