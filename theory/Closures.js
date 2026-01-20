/**
 * ============================================
 * CLOSURES IN JAVASCRIPT - COMPLETE GUIDE
 * ============================================
 * 
 * Definition: "A closure is a function bundled together with its lexical environment."
 * 
 * Simple words mein: Jab ek function kisi doosre function ke andar define hota hai, 
 * toh woh apne bahar wale (parent) function ke variables ko "yaad" rakhta hai, 
 * bhale hi parent function execute hokar khatam ho chuka ho.
 */

console.log("========== CLOSURES EXAMPLES ==========\n");

// ============================================
// 1. DATA PRIVACY - Private Variables
// ============================================
/**
 * Closures ka sabse bada use data ko hidden rakhne ke liye hota hai.
 * JavaScript mein traditionally private variables nahi hote,
 * lekin closures se hum "private" variables bana sakte hain.
 */

console.log("1. DATA PRIVACY - Private Variables");
console.log("-----------------------------------");

function createBankAccount(initialBalance) {
  // Private variable - bahar se directly access nahi kar sakte
  let balance = initialBalance;
  let transactionHistory = [];

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        transactionHistory.push({ type: 'deposit', amount: amount, date: new Date() });
        console.log(`₹${amount} deposited. New Balance: ₹${balance}`);
      }
    },
    withdraw: function (amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        transactionHistory.push({ type: 'withdraw', amount: amount, date: new Date() });
        console.log(`₹${amount} withdrawn. New Balance: ₹${balance}`);
      } else {
        console.log("Insufficient balance!");
      }
    },
    getBalance: function () {
      return balance;
    },
    getTransactionCount: function () {
      return transactionHistory.length;
    }
  };
}

const myAccount = createBankAccount(1000);
myAccount.deposit(500);      // ₹500 deposited. New Balance: ₹1500
myAccount.withdraw(200);     // ₹200 withdrawn. New Balance: ₹1300
console.log("Current Balance:", myAccount.getBalance()); // 1300
console.log("Balance directly:", myAccount.balance);     // undefined - Private hai!
console.log("Transactions:", myAccount.getTransactionCount()); // 2
console.log("");


// ============================================
// 2. FUNCTION FACTORIES - Customized Functions
// ============================================
/**
 * Function factory ek function hai jo doosre functions return karta hai.
 * Har returned function apna khud ka closure maintain karta hai.
 */

console.log("2. FUNCTION FACTORIES - Customized Functions");
console.log("---------------------------------------------");

// Example 1: Multiplier Factory
function createMultiplier(multiplier) {
  let count = 10;
  return function (number) {
    return number * multiplier*count;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log("double(5):", double(5));       // 10
console.log("triple(5):", triple(5));       // 15
console.log("quadruple(5):", quadruple(5)); // 20

// Example 2: Greeting Factory
function createGreeting(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeting("Hello");
const sayNamaste = createGreeting("Namaste");
const sayGoodMorning = createGreeting("Good Morning");

console.log(sayHello("Rahul"));       // Hello, Rahul!
console.log(sayNamaste("Priya"));     // Namaste, Priya!
console.log(sayGoodMorning("Sir"));   // Good Morning, Sir!

// Example 3: Tax Calculator Factory
function createTaxCalculator(taxRate) {
  return function (amount) {
    const tax = amount * (taxRate / 100);
    return {
      originalAmount: amount,
      taxRate: taxRate + "%",
      taxAmount: tax,
      totalAmount: amount + tax
    };
  };
}

const gstCalculator = createTaxCalculator(18);
const serviceTaxCalculator = createTaxCalculator(12);

console.log("GST on ₹1000:", gstCalculator(1000));
console.log("Service Tax on ₹1000:", serviceTaxCalculator(1000));
console.log("");


// ============================================
// 3. CALLBACKS - Async Operations mein State Maintain karna
// ============================================
/**
 * Callbacks mein closures bahut important hain kyunki
 * async operations ke time original scope ka access chahiye hota hai.
 */

console.log("3. CALLBACKS - Async Operations");
console.log("--------------------------------");

// Example 1: setTimeout with Closure
function delayedGreeting(name, delay) {
  const message = `Hello ${name}! This message was delayed by ${delay}ms`;

  setTimeout(function () {
    // Closure: 'message' aur 'name' variable access ho raha hai
    console.log(message);
  }, delay);
}

delayedGreeting("Developer", 1000);

// Example 2: API Call Simulation with Closure
function fetchUserData(userId) {
  const requestTime = new Date().toLocaleTimeString();

  // Simulating API call
  setTimeout(function () {
    // Closure maintains userId and requestTime
    console.log(`User ${userId} data fetched. Request initiated at: ${requestTime}`);
  }, 1500);
}

fetchUserData(101);
fetchUserData(102);

// Example 3: Loop Problem and Solution
console.log("\nLoop Problem (var):");
function problematicLoop() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log("var loop - i:", i); // Sab 4 print honge!
    }, i * 500);
  }
}
// problematicLoop(); // Uncomment to see problem

console.log("Loop Solution (Closure with IIFE):");
function fixedLoopWithClosure() {
  for (var i = 1; i <= 3; i++) {
    (function (index) {
      setTimeout(function () {
        console.log("IIFE fixed - index:", index);
      }, index * 600);
    })(i);
  }
}
// fixedLoopWithClosure(); // Uncomment to see solution

console.log("Loop Solution (let):");
function fixedLoopWithLet() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log("let fixed - i:", i);
    }, i * 700);
  }
}
// fixedLoopWithLet(); // Uncomment to see solution
console.log("");


// ============================================
// 4. EVENT HANDLERS - DOM Events mein Data Track karna
// ============================================
/**
 * Event handlers mein closures bahut useful hain
 * kyunki hum specific data ko event ke saath bind kar sakte hain.
 * Note: Yeh code browser mein chalega, Node.js mein nahi.
 */

console.log("4. EVENT HANDLERS - DOM Events");
console.log("-------------------------------");

// Example 1: Button Click Counter (Browser code)
function createButtonHandler(buttonId, buttonName) {
  let clickCount = 0;

  return function () {
    clickCount++;
    console.log(`${buttonName} clicked ${clickCount} times`);
    // document.getElementById(buttonId).textContent = `Clicked: ${clickCount}`;
  };
}

// Browser mein use:
// document.getElementById('btn1').onclick = createButtonHandler('btn1', 'Submit Button');
// document.getElementById('btn2').onclick = createButtonHandler('btn2', 'Cancel Button');

// Simulation for Node.js:
const submitHandler = createButtonHandler('btn1', 'Submit Button');
const cancelHandler = createButtonHandler('btn2', 'Cancel Button');

submitHandler(); // Submit Button clicked 1 times
submitHandler(); // Submit Button clicked 2 times
cancelHandler(); // Cancel Button clicked 1 times

// Example 2: Color Picker Handler
function createColorHandler(color) {
  return function () {
    console.log(`Selected color: ${color}`);
    // document.body.style.backgroundColor = color;
  };
}

const redHandler = createColorHandler('#FF5733');
const blueHandler = createColorHandler('#3498DB');
const greenHandler = createColorHandler('#2ECC71');

console.log("Color handlers created:");
redHandler();   // Selected color: #FF5733
blueHandler();  // Selected color: #3498DB
greenHandler(); // Selected color: #2ECC71

// Example 3: Form Field Validator
function createFieldValidator(fieldName, validationFn) {
  return function (value) {
    const isValid = validationFn(value);
    console.log(`${fieldName}: ${value} is ${isValid ? 'Valid ✓' : 'Invalid ✗'}`);
    return isValid;
  };
}

const emailValidator = createFieldValidator('Email', (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
const phoneValidator = createFieldValidator('Phone', (value) => /^[0-9]{10}$/.test(value));

emailValidator('test@example.com'); // Email: test@example.com is Valid ✓
emailValidator('invalid-email');     // Email: invalid-email is Invalid ✗
phoneValidator('9876543210');        // Phone: 9876543210 is Valid ✓
phoneValidator('123');               // Phone: 123 is Invalid ✗
console.log("");


// ============================================
// 5. MEMOIZATION - Expensive Calculations Cache karna
// ============================================
/**
 * Memoization ek optimization technique hai
 * jisme hum expensive function calls ke results cache karte hain.
 * Closures yahan cache ko maintain karne ke liye use hote hain.
 */

console.log("5. MEMOIZATION - Caching Expensive Calculations");
console.log("------------------------------------------------");

// Example 1: Generic Memoize Function
function memoize(fn) {
  const cache = {}; // Closure mein cache store hota hai

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key] !== undefined) {
      console.log(`  ↳ Cache hit for: ${key}`);
      return cache[key];
    }

    console.log(`  ↳ Computing for: ${key}`);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Expensive function: Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFib = memoize(function (n) {
  if (n <= 1) return n;
  return memoizedFib(n - 1) + memoizedFib(n - 2);
});

console.log("Fibonacci(10):", memoizedFib(10));
console.log("Fibonacci(10) again:", memoizedFib(10)); // Cache se milega

// Example 2: API Response Cache
function createApiCache() {
  const cache = {};
  const cacheTime = {};
  const CACHE_DURATION = 5000; // 5 seconds

  return {
    fetch: function (url) {
      const now = Date.now();

      if (cache[url] && (now - cacheTime[url]) < CACHE_DURATION) {
        console.log(`Returning cached data for: ${url}`);
        return Promise.resolve(cache[url]);
      }

      console.log(`Fetching fresh data for: ${url}`);
      // Simulating API call
      return new Promise((resolve) => {
        setTimeout(() => {
          const data = { url: url, timestamp: now, data: 'Sample Data' };
          cache[url] = data;
          cacheTime[url] = now;
          resolve(data);
        }, 100);
      });
    },
    clearCache: function () {
      Object.keys(cache).forEach(key => delete cache[key]);
      console.log("Cache cleared!");
    }
  };
}

const apiCache = createApiCache();
// apiCache.fetch('/api/users').then(console.log);

// Example 3: Heavy Calculation Memoization
const memoizedFactorial = memoize(function factorial(n) {
  if (n <= 1) return 1;
  return n * memoizedFactorial(n - 1);
});

console.log("\nFactorial(5):", memoizedFactorial(5));
console.log("Factorial(5) again:", memoizedFactorial(5));
console.log("Factorial(6):", memoizedFactorial(6)); // 5! already cached
console.log("");


// ============================================
// 6. MODULE PATTERN - Code Organization & Encapsulation
// ============================================
/**
 * Module Pattern closures ka use karke private aur public
 * members create karta hai. Yeh code organization ka
 * classic JavaScript pattern hai.
 */

console.log("6. MODULE PATTERN - Code Organization");
console.log("--------------------------------------");

// Example 1: Shopping Cart Module
const ShoppingCart = (function () {
  // Private variables
  let items = [];
  let discount = 0;

  // Private functions
  function calculateTotal() {
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return subtotal - (subtotal * discount / 100);
  }

  function formatCurrency(amount) {
    return `₹${amount.toFixed(2)}`;
  }

  // Public API (Revealed Module Pattern)
  return {
    addItem: function (name, price, quantity = 1) {
      items.push({ name, price, quantity });
      console.log(`Added: ${name} x${quantity} @ ${formatCurrency(price)}`);
    },
    removeItem: function (name) {
      items = items.filter(item => item.name !== name);
      console.log(`Removed: ${name}`);
    },
    setDiscount: function (percent) {
      discount = percent;
      console.log(`Discount set: ${percent}%`);
    },
    getTotal: function () {
      return formatCurrency(calculateTotal());
    },
    getItemCount: function () {
      return items.reduce((count, item) => count + item.quantity, 0);
    },
    displayCart: function () {
      console.log("\n--- Shopping Cart ---");
      items.forEach(item => {
        console.log(`${item.name}: ${item.quantity} x ${formatCurrency(item.price)}`);
      });
      console.log(`Discount: ${discount}%`);
      console.log(`Total: ${this.getTotal()}`);
      console.log("--------------------\n");
    }
  };
})();

ShoppingCart.addItem("Laptop", 50000, 1);
ShoppingCart.addItem("Mouse", 500, 2);
ShoppingCart.addItem("Keyboard", 1500, 1);
ShoppingCart.setDiscount(10);
ShoppingCart.displayCart();

// Example 2: User Authentication Module
const AuthModule = (function () {
  // Private state
  let currentUser = null;
  let isAuthenticated = false;
  const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
  ];

  // Private helper
  function findUser(username, password) {
    return users.find(u => u.username === username && u.password === password);
  }

  // Public API
  return {
    login: function (username, password) {
      const user = findUser(username, password);
      if (user) {
        currentUser = user;
        isAuthenticated = true;
        console.log(`✓ Login successful! Welcome, ${username}`);
        return true;
      }
      console.log("✗ Invalid credentials!");
      return false;
    },
    logout: function () {
      const name = currentUser?.username;
      currentUser = null;
      isAuthenticated = false;
      console.log(`✓ ${name} logged out successfully!`);
    },
    isLoggedIn: function () {
      return isAuthenticated;
    },
    getCurrentUser: function () {
      return currentUser ? { username: currentUser.username, role: currentUser.role } : null;
    },
    hasRole: function (role) {
      return currentUser?.role === role;
    }
  };
})();

console.log("Auth Module Demo:");
console.log("Is logged in?", AuthModule.isLoggedIn()); // false
AuthModule.login('admin', 'admin123');                  // Login successful!
console.log("Is logged in?", AuthModule.isLoggedIn()); // true
console.log("Current user:", AuthModule.getCurrentUser());
console.log("Is admin?", AuthModule.hasRole('admin')); // true
AuthModule.logout();

// Example 3: Counter Module with Multiple Instances
function createCounterModule(name) {
  let count = 0;
  const history = [];

  return {
    name: name,
    increment: function (by = 1) {
      count += by;
      history.push({ action: 'increment', by, result: count });
      return this;
    },
    decrement: function (by = 1) {
      count -= by;
      history.push({ action: 'decrement', by, result: count });
      return this;
    },
    reset: function () {
      count = 0;
      history.push({ action: 'reset', result: count });
      return this;
    },
    getCount: function () {
      return count;
    },
    getHistory: function () {
      return [...history];
    },
    display: function () {
      console.log(`${name}: ${count}`);
      return this;
    }
  };
}

console.log("\nCounter Modules Demo:");
const counter1 = createCounterModule("Visitors");
const counter2 = createCounterModule("Orders");

counter1.increment().increment().increment().display();  // Visitors: 3
counter2.increment(5).decrement(2).display();            // Orders: 3

console.log("Counter1 history:", counter1.getHistory());
console.log("");


// ============================================
// BONUS: INTERVIEW COMMON QUESTIONS
// ============================================

console.log("========== INTERVIEW QUESTIONS ==========\n");

// Question 1: What will be the output?
console.log("Q1: Closure with setTimeout");
function counter() {
  var count = 0;
  setTimeout(function () {
    console.log("Count inside setTimeout:", count);
  }, 2000);
  count = 100;
  return count;
}
console.log("Returned value:", counter()); // 100
// After 2 seconds: "Count inside setTimeout: 100" (not 0!)

// Question 2: Create a function that runs only once
console.log("\nQ2: Function that runs only once");
function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
      return result;
    }
    console.log("Function already called once!");
    return result;
  };
}

const initializeOnce = once(function (config) {
  console.log("Initializing with:", config);
  return "Initialized!";
});

console.log(initializeOnce({ debug: true }));  // Initializing with: {debug: true}
console.log(initializeOnce({ debug: false })); // Function already called once!

// Question 3: Currying with Closures
console.log("\nQ3: Currying Example");
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...nextArgs) {
      return curried.apply(this, [...args, ...nextArgs]);
    };
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log("curry(add)(1)(2)(3):", curriedAdd(1)(2)(3));  // 6
console.log("curry(add)(1, 2)(3):", curriedAdd(1, 2)(3));  // 6
console.log("curry(add)(1)(2, 3):", curriedAdd(1)(2, 3));  // 6


// ============================================
// SUMMARY
// ============================================
/**
 * CLOSURES KEY POINTS:
 * 
 * 1. Data Privacy: Private variables jo bahar se access nahi ho sakte
 * 2. Function Factories: Dynamic functions create karna specific behavior ke saath
 * 3. Callbacks: Async operations mein scope maintain karna
 * 4. Event Handlers: DOM events ke saath data bind karna
 * 5. Memoization: Expensive calculations ko cache karna
 * 6. Module Pattern: Code organization aur encapsulation
 * 
 * Interview Tip:
 * "Closure ek function hai jo apne lexical environment ko 'remember' karta hai.
 * Iska matlab hai ki inner function outer function ke variables ko access 
 * kar sakta hai even after outer function return ho chuki ho."
 */

console.log("\n========== END OF CLOSURES GUIDE ==========");
