let data=[
  { name: "Rahul", age: 30 },
  { name: "Neha", age: 28 },
  { name: "Amit", age: 25 },
  { name: "Riya", age: 22 }
]
// let finalresult=[]
// let result=data.reduce((acc,curr)=>{
//  return  acc.age > curr.age
  
// },{})
// let dd=finalresult.push(result)
// console.log(dd)
// let result=data.map((ele)=>(
// ))



data.sort((a, b) => a.age - b.age);

console.log(data); 
// Result: Riya (22), Amit (25), Neha (28), Rahul (30)

data.sort((a, b) => a.name.localeCompare(b.name));

console.log(data);
// Result: Amit, Neha, Rahul, Riya

let data = [
  { name: "Rahul", age: 30 },
  { name: "Neha", age: 28 },
  { name: "Amit", age: 25 },
  { name: "Riya", age: 22 }
];

// function manualSortSync(arr, key) {
//   let n = arr.length;

//   // 1. Pehla loop: Har element ke liye ek baar chalega
//   for (let i = 0; i < n; i++) {
    
//     // 2. Doosra loop: Adjacent (padosi) elements ko compare karne ke liye
//     for (let j = 0; j < n - 1; j++) {
      
//       // 3. Comparison Logic: Agar pehla element doosre se bada hai
//       if (arr[j][key] > arr[j + 1][key]) {
        
//         // 4. Swapping Logic: Unki jagah badal do
//         let temp = arr[j];      // Pehle ko temp mein rakha
//         arr[j] = arr[j + 1];    // Doosre ko pehle ki jagah dala
//         arr[j + 1] = temp;      // Temp (purana pehla) ko doosre ki jagah dala
        
//       }
//     }
//   }
//   return arr;
// }

// // Age ke hisaab se sort karein
// console.log(manualSortSync(data, "age"));