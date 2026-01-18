let value = "javascript";
let result = value.split("");

let freq = {};

for (let char of result) {
  freq[char] = (freq[char] || 0) + 1;
}

console.log(freq);
