class Employee {
  constructor(
    id,
    fullName,
    baseSalary,
    productSalary,
    productQuantity,
    totalSalary
  ) {
    this.id = id;
    this.fullName = fullName;
    this.baseSalary = baseSalary;
    this.productSalary = productSalary;
    this.productQuantity = productQuantity;
    // this.totalSalary = totalSalary;
  }
}

var arr = [];
function createList() {
  let n = Number(prompt(`Nhập n: `));
  for (let i = 0; i < n; i++) {
    let id = i + 1;
    let fullName = prompt(`Nhập full name nhân viên thứ ${id} : `);
    let baseSalary = prompt(`Nhập base salary nhân viên thứ ${id}: `);
    let productSalary = prompt(`Nhập product salary nhân viên thứ ${id}: `);
    let productQuantity = prompt(`Nhập product quantity nhân viên thứ ${id}: `);
    let newEm = new Employee(
      id,
      fullName,
      baseSalary,
      productSalary,
      productQuantity
    );
    arr.push(newEm);
  }
}

function outputList() {
  console.log(`Employee list: `);
  arr.forEach((e) => console.log(e));
}

function calcSalary() {
  let Salary = 0;
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i].productQuantity;
    if (x < 50) {
      Salary =
        ((arr[i].baseSalary + arr[i].productSalary * arr[i].productQuantity) *
          90) /
        100;
    } else if ((x = 50)) {
      Salary =
        arr[i].baseSalary + arr[i].productSalary * arr[i].productQuantity;
    }
    Salary =
      ((arr[i].baseSalary + arr[i].productSalary * arr[i].productQuantity) *
        110) /
      100;

    // arr[i].totalSalary = Salary;
    arr[i].prototype.totalSalary = Salary;

    // console.log(
    //   `Nhân viên ${arr[i].fullName} có lương là: ${arr[i].totalSalary}`
    // );
  }
}

//main
createList();
calcSalary(arr);
console.log(arr);
