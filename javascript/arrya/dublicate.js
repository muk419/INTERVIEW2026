// Remove duplicate values from an array
let array1=[1,2,1,4,5,2,3,5];
 
let storeDublicate=array1.filter((ele,i)=>(array1.indexOf(ele)!=i))
console.log(storeDublicate)

// function dublicateValue(array1){
//   let finalvalue=[]
//   for(i=0;i<array1.length;i++){
//     if(array1.indexOf(array1[i])!=i){
//       finalvalue.push(array1[i])
//     }
//  }
//  console.log(finalvalue)
// }
// dublicateValue(array1)
