const arr = [10, 5, 20, 8, 25, 3,10,1000,10000,2000];

// let max = 0;
// let secondMax =0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     secondMax = max;
//     max = arr[i];
//   }
// }
// console.log(secondMax);

let max=0;
let secondmax=0;

for(let i = 0; i < arr.length; i++){
  if(arr[i]>max){
    secondmax=max;
    max=arr[i]
  }
}

console.log(secondmax)