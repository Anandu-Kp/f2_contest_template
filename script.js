/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(employee => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const employee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern"
  };
  arr.push(employee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].profession === "admin") {
      arr.splice(i, 1);
      break;
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const employee1 = {
    id: 5,
    name: "anandu",
    age: "21",
    profession: "SDE2"
  };
  const employee2 = {
    id: 6,
    name: "albin",
    age: "22",
    profession: "SDE1"
  };
  const employee3 = {
    id: 7,
    name: "ivin",
    age: "22",
    profession: "HR"
  };
  let newArr = [employee1, employee2, employee3];
  let result = arr.concat(newArr);
  console.log(result);
}
