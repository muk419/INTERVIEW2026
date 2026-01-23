let data={
  name:"mukesh",
  age:"10",
  ed:"BE"
}

const {name:newName,...rest}=data

newDta={newName,...rest}
console.log(newDta);
