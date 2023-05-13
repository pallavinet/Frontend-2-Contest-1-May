/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  const ans1=arr.map(a=>{
    
    return a.marks>50;
  
  
})
console.log(ans1);
  
  
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  const ans2=arr.filter(a=>{
    
    return a.marks>50;
  
  
})
console.log(ans2);
}

let arrnew={id:4,name:"susan",age:"20",marks:45};
function addData() {
  //Write your code here, just console.log
  const ans3=arr.push(arrnew);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  const index=arr.findIndex(a =>{
    return a.marks<50;
  })
  const ans4=arr.splice(index);
  console.log(ans4);
}

let arr2 = [
  { id: 6, name: "jane", age: "52", profession: "admin" },
  { id: 7, name: "jill", age: "62", profession: "intern" },
  { id: 8, name: "kin", age: "72", profession: "developer" },
];
function concatenateArray() {
  //Write your code here, just console.log
  const ans5 =arr.concat(arr2);
  console.log(ans5);
}
