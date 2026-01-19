let data=["mukesh","Yadav","mukesh","Yadav"];
let storeData=[];
  for(let ele of data){
    storeData[ele] = (storeData[ele] || 0) + 1;
  }
  console.log(storeData)
