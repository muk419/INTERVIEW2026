let maxValue=[1,2,3,4,5];

let result = maxValue.reduce((acc, cur) => {
  return acc < cur ? acc : cur;
});

console.log(result);
