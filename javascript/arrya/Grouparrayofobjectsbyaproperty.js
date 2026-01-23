const users = [
  { name: "Mukesh", role: "Frontend", age: 27 },
  { name: "Amit", role: "Backend", age: 28 },
  { name: "Rahul", role: "Frontend", age: 26 },
  { name: "Neha", role: "Backend", age: 25 }
];
const result = {};

users.forEach(user => {
  if (!result[user.role]) {
    result[user.role] = [];
  }
  result[user.role].push(user);
});

console.log(result);
