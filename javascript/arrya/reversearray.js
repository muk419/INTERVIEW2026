let data = [1, 2, 3, 4, 5];
let result = []
// Array ko reverse karne ke liye:
// 1. i hamesha (length - 1) se shuru hona chahiye.
// 2. Loop tab tak chalega jab tak i >= 0 rahe.
// 3. Har baar i ki value kam hogi (i--).

for (let i = data.length - 1; i >= 0; i--) {
  result.push(data[i]);
}

console.log("Reversed Array:", result); 