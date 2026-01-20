let arr = [1, 2, 4, 23, 4, 5];

function isorted(arr) {
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
let result = isorted(arr)
console.log(result)

// 1 > 2 false
// 2 > 4 false
// 4 > 23 false
// 23 > 4 true
// 4 > 5 false
