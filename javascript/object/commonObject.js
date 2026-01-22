const a = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const b = [{ id: 1, age: 25 }, { id: 2, age: 30 }];
// let ValueObject=Object.assign(a,b)
// console.log(ValueObjec  
let storeValue=[]
for(let i=0;i<a.length;i++){
   for(j=0;j<b.length;j++){
       if(a[i].id==b[j].id){
  storeValue.push(Object.assign(a[i],b[j]))
       }
      
   }
}
// O/p
console.log(storeValue)
// [
//   { id: 1, name: "Alice", age: ,
//   { id: 2, name: "Bob", age: 30 }
// ]

// let a=[]