const obj1 = {};
const obj2 = { name: 'Alice' };

// if(Object.keys(obj2).length==0){
//   console.log(false)
// }
// else{
//   console.log(true)
// }

if(Object.entries(obj2).length==0){
  console.log(false)
}
else{
  console.log(true)
}