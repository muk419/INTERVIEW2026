/**
 * ARROW FUNCTIONS vs REGULAR FUNCTIONS (The 'this' Keyword)
 * 
 * Sawaal: Arrow function ke paas apna 'this' kyun nahi hota?
 * Jawaab: Arrow functions "LEXICAL SCOPING" follow karte hain.
 * 
 * 1. REGULAR FUNCTIONS:
 * Inka 'this' "Dynamic" hota hai. Matlab 'this' ki value depend karti hai ki function 
 * KAISE call kiya gaya hai (Invocation context).
 */

const obj1 = {
  name: "Regular Function",
  showName: function () {
    console.log(this.name); // 'this' points to 'obj1'
  }
};
obj1.showName(); // Output: Regular Function

/**
 * 2. ARROW FUNCTIONS:
 * Inka apna 'this' binding nahi hota. Yeh apne surrounding (parent) scope se 
 * 'this' ko "inherit" karte hain. Isse "Lexical this" kehte hain.
 */

const obj2 = {
  name: "Arrow Function",
  showName: () => {
    console.log(this.name); // 'this' points to Global Object (Window/Empty in Node)
  }
};
obj2.showName(); // Output: undefined (Kyunki parent scope global hai)

/**
 * WHY? (Technically) - DEEP DIVE
 */

// 1. NO 'arguments' OBJECT
// Regular function ke paas default 'arguments' object hota hai.
function regularArgs() {
  console.log("Regular args:", arguments); // [1, 2, 3] jaisa dikhega
}
regularArgs(1, 2, 3);

// Arrow function ke paas nahi hota. Iske liye hum "Rest Parameters" use karte hain.
const arrowArgs = (...args) => {
  // console.log(arguments); // ReferenceError: arguments is not defined
  console.log("Arrow rest args:", args); // [1, 2, 3]
};
arrowArgs(1, 2, 3);


// 2. CANNOT BE USED AS CONSTRUCTORS
// Regular functions 'new' se call ho sakte hain (Constructor Functions).
function Person(name) {
  this.name = name;
}
const p1 = new Person("John");
console.log(p1.name); // John

// Arrow functions mein [[Construct]] method nahi hota, isliye fixed 'this' rehta hai.
const Animal = (name) => {
  this.name = name;
};
// const a1 = new Animal("Dog"); // TypeError: Animal is not a constructor


// 3. THE '.bind(this)' PROBLEM (Most Important)
// Pehle (ES5) mein callbacks mein 'this' fix karne ke liye bind karna padta tha.

const counter = {
  count: 0,
  startOld: function () {
    // Option 1: .bind(this)
    setInterval(function () {
      this.count++;
      console.log("Old way (bind):", this.count);
    }.bind(this), 1000);

    // Option 2: 'self' variable
    var self = this;
    setInterval(function () {
      self.count++;
      console.log("Old way (self):", self.count);
    }, 1000);
  },

  startNew: function () {
    // Arrow function automatically parent scope (counter) se 'this' utha lega.
    // No .bind() needed, No 'self' needed!
    setInterval(() => {
      this.count++;
      console.log("New way (Arrow):", this.count);
    }, 1000);
  }
};

/**
 * 4. NO 'super' BINDING
 * Arrow functions ka apna 'super' nahi hota. Wo parent class ke 
 * constructor/methods ko Lexical scoping ke through hi access karte hain.
 */

const person = {
  age: 25,
  grow: function () {
    // Regular function inside setTimeout creates a new 'this' scope
    setTimeout(function () {
      console.log("Regular setTimeout age:", this.age); // undefined
    }, 100);

    // Arrow function inherits 'this' from 'grow' function (which is 'person')
    setTimeout(() => {
      console.log("Arrow setTimeout age:", this.age); // 25
    }, 100);
  }
};
person.grow();

/**
 * THE .BIND() STORY vs ARROW FUNCTIONS
 * 
 * Chaliye ek practical scenario lete hain: Ek User Object jo 2 seconds ke baad 
 * apna name print karna chahta hai.
 */

console.log("\n--- BIND vs ARROW COMPARISON ---");

// --- 1. LEGACY WAY (The Problem) ---
const legacyUser = {
  name: "Rahul",
  sayHi: function () {
    console.log("Legacy: Name is", this.name); // 'this' points to legacyUser

    // setTimeout ke andar 'this' badal jata hai
    setTimeout(function () {
      // Yahan 'this' points to Global/Window, legacyUser nahi!
      console.log("Legacy Timeout (Bina Bind):", this.name); // undefined
    }, 1000);
  }
};
legacyUser.sayHi();

// --- 2. THE FIX (Before Arrow Functions) ---
const legacyFixedUser = {
  name: "Rahul (Fixed)",
  sayHi: function () {
    // Hum manually 'this' ko fix karte the .bind() se
    setTimeout(function () {
      console.log("Legacy Timeout (With Bind):", this.name);
    }.bind(this), 1000); // .bind(this) means: is function ka 'this' hamesha mera wala 'this' rehna chahiye.
  }
};
legacyFixedUser.sayHi();

// --- 3. MODERN WAY (The Solution: Arrow Functions) ---
const modernUser = {
  name: "Rahul (Modern)",
  sayHi: function () {
    // Arrow function doesn't care HOW it's called. 
    // It always uses 'this' from its writing context (lexical).
    setTimeout(() => {
      console.log("Modern Timeout (Arrow):", this.name); // Automatically "Rahul (Modern)"
    }, 1000);
  }
};
modernUser.sayHi();

/**
 * CONCLUSION:
 * Arrow function ko isi liye laya gaya tha:
 * 1. Code ko 4-5 lines se 1 line ka banane ke liye.
 * 2. Manual .bind(this) ki headache khatam karne ke liye.
 * 3. Taaki developer ko 'this' track na karna pade, wo wahi rahega jahan function likha gaya hai.
 */
