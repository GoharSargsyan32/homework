// const searchUser = (param) => {
//   const users = [
//     { firstName: "Davit", lastName: "Sargsyan", age: 20 },
//     { firstName: "Ani", lastName: "Hovsepyan", age: 40 },
//     { firstName: "Anna", lastName: "Tashchyan", age: 50 },
//     { firstName: "Aram", lastName: "Nazaryan", age: 70 },
//     { firstName: "Hhovo", lastName: "Manukyan", age: 30 },
//     { firstName: "Rafo", lastName: "Safaryan", age: 18 },
//   ];
//   let searchParam = param.toLowerCase();
//   let filterResult = users.filter((user) =>
//     (user.firstName.toLowerCase()).includes(searchParam));

//   return filterResult;
// };

// console.log(searchUser("ar"));

// class Human {
//     constructor(name, lastName) {
//         this.name = name,
//         this.lastName = lastName
//         this.speed = 0,
//         this.state = undefined
//     }

//     run(speed) {
//         this.speed = speed,
//         alert(`${this.name}: ${this.speed}`)
//     }

//     stop() {
//         this.speed = 0;
//         alert(`${this.name} is stopped`)
//     }

//     changeState(param) {
//         this.state = param;
//         alert(`${this.name} is ${this.state}`)
//     }
// };

// let obj = new Human('John', 'Smith');

// console.log(obj.run(5));
// console.log(obj.stop());
// console.log(obj.changeState('thinking'));

const arr = [
  [0, 2, 4, 7],
  [3, 1, 2, 0],
  [0, 0, 0, 1],
  [2, 3, 1, 0],
];

let copyArr = arr.map((item) => [...item]);

for (let i = 0; i < arr.length - 1; i++) {
  for (j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === 0) {
      if (copyArr[i + 1][j] !== 0) {
        copyArr[i + 1][j] = 0;
      }
    }
  }
}
console.log(copyArr)

let totalSum = copyArr.reduce(
  (acc, item) => acc + item.reduce((itemAcc, val) => itemAcc + val, 0),
  0
);

console.log(totalSum);
