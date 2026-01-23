// const a = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
// const b = [{ id: 1, age: 25 }, { id: 2, age: 30 }];
// // let ValueObject=Object.assign(a,b)
// // console.log(ValueObjec  
// let storeValue=[]
// for(let i=0;i<a.length;i++){
//    for(j=0;j<b.length;j++){
//        if(a[i].id==b[j].id){
//   storeValue.push(Object.assign(a[i],b[j]))
//        }
      
//    }
// }
// // O/p
// console.log(storeValue)
// // [
// //   { id: 1, name: "Alice", age: ,
// //   { id: 2, name: "Bob", age: 30 }
// // ]

// // let a=[]

const obj1 = { name: "Mukesh", age: 27, role: "Frontend" };
const obj2 = { age: 30, role: "Backend", city: "Mumbai" };
let result = {};

for (let key in obj1) {
  for (let data in obj2) {
    if (key === data) {
      result[key] = obj1[key];
    }
  }
}

console.log(result);


