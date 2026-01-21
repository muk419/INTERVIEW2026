let a=[2,3,2,5,2];
let b=[2,3,2,3];

let finalelement=[...a,...b]
 let result=finalelement.filter((ele,i)=>finalelement.indexOf(ele)!=i)
 console.log(...new Set(result))
