// let myGlobal = 10;

// function fun1() {
//   // Assign 5 to oopsGlobal here
//   oopsGlobal = 5;
// }

// // Only change code above this line

// function fun2() {
//   let output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }

// fun2();

// function nextInLine(arr, item) {
//   // Only change code below this line
//   arr.push(item);
//   const del = arr.shift();

//   return del;
//   // Only change code above this line
// }

// // Setup
// let testArr = [1, 2, 3, 4, 5];

// nextInLine(testArr, 3);

// function testLogicalOr(val) {
//   // Only change code below this line

//   if (val > 20 || val < 10) {
//     return "Outside";
//   }
//   // Only change code above this line
//   return "Inside";
// }

// console.log(testLogicalOr(0));

// ///////Golf
// const names = [
//   "Hole-in-one!",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "Double Bogey",
//   "Go Home!",
// ];

// function golfScore(par, strokes) {
//   // Only change code below this line
//   if (strokes === 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes === par - 1) {
//     return names[2];
//   } else if (strokes === par) {
//     return names[3];
//   } else if (strokes === par + 1) {
//     return names[4];
//   } else if (strokes === par + 2) {
//     return names[5];
//   } else if (strokes >= par + 3) {
//     return names[6];
//   } else {
//     return "Change Me";
//   }

//   // Only change code above this line
// }

// console.log(golfScore(5, 9));

// // # Blackjack
// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   if (card >= 2 && card <= 6) {
//     count += 1;
//   } else if (card === 7 || card === 8 || card === 9) {
//     count += 0;
//   } else if (
//     card === 10 ||
//     card === "J" ||
//     card === "Q" ||
//     card === "K" ||
//     card === "A"
//   ) {
//     count += -1;
//   }

//   // console.log(count);
//   if (count <= 0) {
//     console.log(count + " " + "Hold");
//   } else if (count > 0) {
//     console.log(count + " " + "Bet");
//   } else {
//     return "Change Me";
//   }
//   // Only change code above this line
// }

// cc(2);
// cc(3);
// cc(7);
// cc("K");
// cc("A");

// Freecode
// function checkObj(obj, checkProp) {
//   // Only change code below this line
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp];
//   } else {
//     return "Not Found";
//   }

// }
// console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));

// let myMusic = [
//   {
//     artist: "Billy Joel",
//     title: "Piano Man",
//     release_year: 1973,
//     formats: ["CD", "8T", "LP"],
//     gold: true,
//   },
// ];

// // myMusic = [
// //   {
// //     artist: "2Pac",
// //     title: "Changes",
// //     release_year: 2000,
// //     formats: ["Vinyl", "BlueRay"],
// //   },
// // ];
// console.log(myMusic[0].artist);

// Record Collection
// // Setup
// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     // tracks: [],
//     albumTitle: "ABBA Gold",
//   },
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete records[id][prop];
//   }
//   if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && value !== "") {
//     if (!records[id].tracks) {
//       records[id].tracks = [];
//     }
//     records[id].tracks.push(value);
//   } else if (prop === "tracks" && value !== "") {
//     records[id].tracks ? (records[id].tracks = value) : console.log("всё ок");
//   }
//   return records;
// }
// // GPT
// function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete records[id][prop];
//   } else if (prop !== "tracks") {
//     records[id][prop] = value;
//   } else if (prop === "tracks") {
//     if (!records[id].tracks) {
//       records[id].tracks = [];
//     }
//     records[id].tracks.push(value);
//   }
//   return records;
// }

// console.log(
//   updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
// );

// // console.log(
// //   updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
// // );
// // console.log(
// //   updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
// // );

// 23.05.2023

// Setup
// const myArray = [];

// // Only change code below this line
// let i = 5;
// while (i >= 0) {
//   myArray.push(i);
//   i--;
//   console.log(myArray);
// }
////

// Setup
// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i];
// }

// РЕКУРСИЯ
// function multiply(arr, n) {
//   let product = 1;
//   for (let i = 0; i < n; i++) {
//     product *= arr[i];
//   }
//   console.log(product);
//   return product;
// }

// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }
// console.log(multiply([1, 2, 3, 4, 5], 3));

// function sum(arr, n) {
//   // Only change code below this line
//   if (n <= 0) {
//     return 0;
//   }
//   // Only change code above this line
//   else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
// }

// console.log(sum([1, 2, 3, 4, 5], 3));

// FREECODE Profile Lookup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   // Only change code above this line
//   return "No such contact";
// }

// console.log(lookUpProfile("Bob", "number"));

// Radix
// function convertToInteger(str, radix) {
//   return parseInt(str, 2);
// }

// console.log(convertToInteger("10011"));

//
// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     console.log(countArray);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// console.log(countdown(10));

//// RECURSION !!!!!!!

// function rangeOfNumbers(startNum, endNum) {
//   let countArray = [];
//   // условие экстренного прекращения
//   if (startNum === endNum) return [startNum];
//   // Базовая проверка заканчивающая рекурсию
//   if (countArray.length === endNum) return;
//   else {
//     countArray = rangeOfNumbers(startNum, endNum - 1);
//     countArray.push(endNum);
//   }
//   return countArray;
// }

// console.log(rangeOfNumbers(1, 5));

// factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
// console.log(factorial(3));

// let t = 0;
// function f1() {
//   t++;
//   console.log(t);
//   if (t === 100) return;
//   //   f1();
// }
// // f1();
// // цикл
// function f2() {
//   let out = "";
//   for (let i = 1; i <= 30; i++) {
//     out += i + " ";
//   }
//   console.log(out);
// }
// // f2();
// // Рекурсия
// let i = 0;
// let out = "";
// function f3() {
//   i++;
//   out += i + " ";
//   if (i >= 30) return;
//   f3();
// }
// // f3();
// // console.log(out);

// // лицо с низкой соц ответсв
// function randomInteger(min, max) {
//   // случайное число от min do (max + 1)
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }
// let s1 = 0;
// function moneyRecursion() {
//   let money = randomInteger(0, 100); //могут дать 0 , или до 100
//   console.log("add: " + money);
//   s1 += money;
//   console.log("sum: " + s1);
//   if (s1 >= 300) return;
//   moneyRecursion();
// }

// // moneyRecursion();

// function moneyCycle() {
//   let s1 = 0;
//   for (let i = 0; true; i++) {
//     let money = randomInteger(0, 100);
//     console.log("add: " + money);
//     s1 += money;
//     if (s1 >= 300) return;
//   }
// }
// moneyCycle();

// VAR LET
// function checkScope() {
//   let i = "function scope";
//   if (true) {
//     let i = "block scope";
//     console.log("Block scope i is: ", i);
//   }
//   console.log("Function scope i is: ", i);
//   return i;
// }
// checkScope();

// Mutate an Array Declared with const
// const s = [5, 7, 2];
// function editInPlace() {
//   // Only change code below this line
// s[0] = 2;
// s[2] = 7;
//   // Using s = [2, 5, 7] would be invalid

//   // Only change code above this line
// }
// editInPlace();

/////// FREEZE

// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14,
//   };
//   // Only change code below this line
//   Object.freeze(MATH_CONSTANTS);
//   // Only change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch (ex) {
//     console.log(ex);
//   }
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();
// console.log(freezeObj());

// ...SPREAD
// const sum = (...args) => {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// };
// console.log(sum(1, 2, 3));

//
// const arr = [6, 89, 3, 45];
// const maximus = Math.min(...arr);
// console.log(maximus);

// const user = { name: "Jeka", age: 36 };
// const { name, age } = user;
// console.log(user.name);

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80,
// };

// // Only change code below this line

// const { today, tomorrow } = HIGH_TEMPERATURES;
// console.log(tomorrow);

//
// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };

// // Only change code below this line

// const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;

// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b); // 1 2

// let a = 8,
//   b = 6;
// // // Only change code below this line
// [a, b] = [b, a];
// console.log(a);
// let [a, b, c] = "abc";
// console.log(a);

// let [one, two, three] = [1, 2, 3];
// console.log(one);

// let user = {
//   name: "John",
//   age: 30,
// };

// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}:${value}`);
// }

// DESTRUCTURING

// function removeFirstTwo(list) {
//   // Only change code below this line
//   const [, , ...shorterList] = list;
//   // Only change code above this line
//   return shorterList;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);

// console.log(sourceWithoutFirstTwo);

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85,
// };

// // Only change code below this line
// const half = ({ max, min }) => (max + min) / 2.0;
// // Only change code above this line
// console.log(half(stats));

//////

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"],
// };

// function makeList(arr) {
//   const failureItems = [];
//   arr.forEach((i) => {
//     failureItems.push(`<li class="text-warning">${i}</li>`);
//   });
//   return failureItems;
// }

// const failuresList = makeList(result.failure);

////
// const createPerson = (name, age, gender) => ({
//   // Only change code below this line
//   name,
//   age,
//   gender,
//   // Only change code above this line
// });

// Only change code below this line
// const bicycle = {
//     gear: 2,
//     setGear(newGear) {
//       this.gear = newGear;
//     }
//   };
//   // Only change code above this line
//   bicycle.setGear(3);
//   console.log(bicycle.gear);

/// КЛАССЫ
// Only change code below this line
// class Vegetable {
//     constructor(name) {
//       this.name = name;
//     }
//     carrot() {
//       console.log(this.name);
//     }
//   }
//   // Only change code above this line

//   const carrot = new Vegetable("carrot");
//   console.log(carrot.name); // Should display 'carrot'

// ГЕТТЕРЫ И СЕТТЕРЫ
// class Car {
//   constructor(cost) {
//     this.cost = cost;
//   }
//   get newCost() {
//     return this.cost;
//   }
//   set newCost(cost) {
//     return (this.cost = this.cost + cost);
//   }
// }

// const lamba = new Car(500);

//
// class Thermostat {
//   constructor(temperatureFahrenheit) {
//     this._temperatureFahrenheit = temperatureFahrenheit;
//   }
//   get temperature() {
//     return (5 / 9) * (this._temperatureFahrenheit - 32);
//   }
//   set temperature(temperatureCelsius) {
//     this._temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;
//   }
// }

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius

///
// import * as stringFunctions from "./string_functions.js"
// // Only change code above this line

// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");

/// ALGORITHMS AND DATASTRUCTURE

// function mixedNumbers(arr) {
//   // Only change code below this line
//   arr.unshift("I", 2, "three");
//   arr.push(7, "VIII", 9);
//   // Only change code above this line
//   return arr;
// }

// console.log(mixedNumbers(["IV", 5, "six"]));

// function forecast(arr) {
//   // Only change code below this line
//   //   arr.slice(2, 4);
//   return arr.slice(2, 4);
// }

// // Only change code above this line
// console.log(
//   forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
// ); // warm, sunny

/// SPREAD
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr = arr.slice(...arr, num);

    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
