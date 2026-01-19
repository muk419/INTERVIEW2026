/**
 * CALLBACKS AND HIGHER ORDER FUNCTIONS (HOF)
 * 
 * Aapka understanding ekdum sahi hai!
 * 
 * Ek line mein:
 * - Callback: Wo function jo kisi doosre function mein PASS kiya jata hai.
 * - Higher Order Function (HOF): Wo function jo kisi doosre function ko RECEIVE karta hai 
 *   ya koi function RETURN karta hai.
 */

// --- 1. CALLBACK FUNCTION ---
// Yeh function baad mein call hoga, isliye ise 'Callback' kehte hain.
const sayHello = (name) => {
  console.log("Hello", name);
};

// --- 2. HIGHER ORDER FUNCTION (HOF) ---
// Yeh function 'sayHello' ko as a parameter le raha hai.
const processUser = (name, callback) => {
  console.log("Processing user...");
  callback(name); // Callback ko yahan call kiya gaya
};

processUser("Rahul", sayHello);


/**
 * 3. HOF EXAMPLES IN JAVASCRIPT (Built-in)
 * Array methods like map, filter, reduce are all HOFs.
 */

const numbers = [1, 2, 3];

/**
 * BREAKDOWN of: numbers.map(n => n * 2)
 * 
 * 1. .map() is a HIGHER ORDER FUNCTION:
 *    Kyunki yeh apne arguments mein ek aur function (n => n * 2) ko 'accept' kar raha hai.
 *    Bina kisi function ke .map() kaam nahi kar sakta.
 * 
 * 2. (n => n * 2) is a CALLBACK FUNCTION:
 *    Kyunki yeh function .map() ke andar pass kiya gaya hai.
 *    .map() is function ko array ke har element ke liye "waapas call" (call back) karega.
 */

// .map() ek HOF hai, aur (n => n * 2) ek callback hai.
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]


/**
 * 4. GENERIC MAP IMPLEMENTATION (Polyfill)
 * 
 * Agar humein apna 'map' banana ho (from scratch), toh woh kaise dikhega?
 * Isse aapko samajh ayega ki HOF aur Callbacks milkar kaise kaam karte hain.
 */

function myMap(array, callback) {
  const output = []; // Naya array jo return hoga

  // Har element par loop chalayenge
  for (let i = 0; i < array.length; i++) {
    // Callback ko call karenge aur result ko output mein push karenge
    const result = callback(array[i], i, array);
    output.push(result);
  }

  return output;
}

// Chaliye test karte hain
const arr = [10, 20, 30];
const myDoubled = myMap(arr, (val) => val * 2);

console.log("Custom Map Result:", myDoubled); // [20, 40, 60]


/**
 * 5. HOF RETURNING A FUNCTION
 * HOF sirf function leta hi nahi, function wapas (return) bhi kar sakta hai.
 */

function multiplier(factor) {
  // Yeh function return kar raha hai
  return function (num) {
    return num * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10


/**
 * INTERVIEW SHORT ANSWER:
 * "Functions are first-class citizens in JS. 
 * A Higher Order Function is a function that either takes one or more functions 
 * as arguments or returns a function as its result."
 */
