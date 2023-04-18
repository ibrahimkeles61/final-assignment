const xlsx = require("xlsx");

export const cells = [];

export const doSomething = () => {
  var workbook = xlsx.readFile("./ogrenci_listesi.xlsx");

  let worksheet = workbook.Sheets[workbook.SheetNames[0]];

  for (let cell in worksheet) {
    const value = worksheet[cell].v;
    if (value) {
      cells.push(value);
    }
  }
};

const array = [
  { sn: 1, name: "brian" },
  { sn: 2, name: "elvis" },
  { sn: 3, name: "jack" },
  { sn: 4, name: "dwayne" },
  { sn: 5, name: "kevin" },
  { sn: 6, name: "ryan" },
];

const shuffle = (arr) => {
  const shuffledArray = [];
  var arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    const indexForThisRound = Math.floor(Math.random() * arr.length);
    shuffledArray.push(arr[indexForThisRound]);
    arr.splice(indexForThisRound, 1);
  }

  return shuffledArray;
};

// console.log("yes");

let arr = ["bir", "iki"];

let obj = {};

// arr.forEach((e, i) => {
//   obj[`${e}`] = i;
// });

// console.log(Object.values(obj));
