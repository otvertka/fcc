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
// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//     newArr.push([...arr]);

//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2));

// IndexOf
// function quickCheck(arr, elem) {
//   // Only change code below this line
//   if (arr.indexOf(elem) === -1) {
//     return false;
//   } else return true;
//   // Only change code above this line
// }

// console.log(quickCheck(["squash", "onions", "shallots"], "squash"));

// FOR
// function greaterThanTen(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i]; j++) {
//       console.log(arr[i][j]);
//     }
//   }
//   // Only change code above this line
//   // return newArr;
// }

// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 3, 9],
//     ],
//     3
//   )
// );

// function filteredArray(arr, elem) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let subArr = arr[i];
//     let containsEl = false;
//     for (let j = 0; j < subArr.length; j++) {
//       if (subArr[j] === elem) {
//         containsEl = true;
//         break;
//       }
//     }
//     if (!containsEl) {
//       newArr.push(subArr);
//     }
//   }
//   return newArr;
// }

// refactoring

// function filteredArray(arr, elem) {
//   return arr.filter((subArr) => !subArr.includes(elem));
// }
// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 3, 9],
//     ],
//     6
//   )
// );

/// Вложенные массивы
// let nestedArray = [
//   ["deep"],
//   [["deeper"], ["deeper"]],
//   [[["deepest"], ["deepest"]], [[["deepest-est?"]]]],
// ];

// let myNestedArray = [
//   // Only change code below this line
//   ["unshift", false, 1, 2, 3, "complex", "nested"],
//   [["loop", "shift", 6, 7, 1000, "method", "deep"]],
//   [[["concat", false, true, "spread", "array", "deeper"]]],
//   [[[["mutate", 1327.98, "splice", "slice", "push", "deepest"]]]],
//   ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth"],
//   // Only change code above this line
// ];

// ..Add Key-Value Pairs to JavaScript Objects
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
// };

// // Only change code below this line
// foods["bananas"] = 13;
// foods.grapes = 35;
// foods["strawberries"] = 27;
// // Only change code above this line

// console.log(foods);
///

// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27,
// };

// function checkInventory(scannedItem) {
//   // Only change code below this line
//   return foods[scannedItem];
//   // Only change code above this line
// }

// console.log(checkInventory("apples"));  // 25

///
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };

// // Only change code below this line
// delete foods.oranges;
// delete foods.plums;
// delete foods.strawberries;
// // Only change code above this line

// console.log(foods);

///
// let users = {
//   Alan: {
//     age: 27,
//     online: true,
//   },
//   Jeff: {
//     age: 32,
//     online: true,
//   },
//   Sarah: {
//     age: 48,
//     online: true,
//   },
//   Ryan: {
//     age: 19,
//     online: true,
//   },
// };

// function isEveryoneHere(userObj) {
//   // Only change code below this line
//   return (
//     userObj.hasOwnProperty("Alan") &&
//     userObj.hasOwnProperty("Jeff") &&
//     userObj.hasOwnProperty("Sarah") &&
//     userObj.hasOwnProperty("Ryan")
//   );
//   // Only change code above this line
// }

// console.log(isEveryoneHere(users));
////////////////////////////////////

// const users = {
//   Alan: {
//     online: false,
//   },
//   Jeff: {
//     online: true,
//   },
//   Sarah: {
//     online: false,
//   },
// };

// function countOnline(allUsers) {
//   // Only change code below this line
//   let count = 0;
//   for (const user in allUsers) {
//     if (allUsers[user].online === true) {
//       count += 1;
//     }
//   }
//   return count;
//   // Only change code above this line
// }

// console.log(countOnline(users));

//////////////////

// let users = {
//   Alan: {
//     age: 27,
//     online: false,
//   },
//   Jeff: {
//     age: 32,
//     online: true,
//   },
//   Sarah: {
//     age: 48,
//     online: false,
//   },
//   Ryan: {
//     age: 19,
//     online: true,
//   },
// };

// function getArrayOfUsers(obj) {
//   // Only change code below this line
//   return Object.keys(obj);
//   // Only change code above this line
// }

// getArrayOfUsers(users); //  ['Alan', 'Jeff', 'Sarah', 'Ryan']

///////////////

// let user = {
//   name: "Kenneth",
//   age: 28,
//   data: {
//     username: "kennethCodesAllDay",
//     joinDate: "March 26, 2016",
//     organization: "freeCodeCamp",
//     friends: ["Sam", "Kira", "Tomo"],
//     location: {
//       city: "San Francisco",
//       state: "CA",
//       country: "USA",
//     },
//   },
// };

// function addFriend(userObj, friend) {
//   // Only change code below this line
//   userObj.data.friends.push(friend);
//   return userObj.data.friends;
//   // Only change code above this line
// }

// console.log(addFriend(user, "Pete"));

//////// BASIC Algorithm
// #1 REVERSE String
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"));

// # 2 Factorialize a Number
// function factorialize(num) {
//   console.log(num);
//   return num ? num * factorialize(num - 1) : 1;
// }

// console.log(factorialize(5));

// # 3 Find the Longest Word in a String
// function findLongestWordLength(str) {
//   newArr = [];
//   str.split(" ").forEach((word) => newArr.push(word.length));
//   return +Math.max.apply(null, newArr);
// }

/// GPT
// function findLongestWordLength(str) {
//   // Split the sentence into individual words
//   var words = str.split(" ");

//   // Initialize a variable to store the length of the longest word
//   var maxLength = 0;

//   // Iterate through each word
//   for (var i = 0; i < words.length; i++) {
//     // Update maxLength if the current word's length is greater
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//     }
//   }

//   // Return the length of the longest word
//   return maxLength;
// }

// reduce
// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);

// alert(result); // 15
// GPT refact

// function findLongestWordLength(str) {
//   // Split the sentence into individual words
//   const words = str.split(" ");

//   // Use the reduce() method to find the longest word length
//   const maxLength = words.reduce((max, word) => Math.max(max, word.length), 0);

//   // Return the length of the longest word
//   return maxLength;
// }

// console.log(findLongestWordLength("May the force be with you"));

//Return Largest Numbers in Arrays
// function largestOfFour(arr) {
//   let newArr = [];
//   arr.forEach((subArr) => newArr.push(Math.max.apply(null, subArr)));
//   return newArr;
// }

// largestOfFour([
//   [4, 5, 1, 3],
//   [13, 27, 18, 26],
//   [32, 35, 37, 39],
//   [1000, 1001, 857, 1],
// ]);   // [5, 27, 39, 1001]

/// Confirm the Ending

// function confirmEnding(str, target) {
//   console.log(str.endsWith(target));
// }

// function confirmEnding(str, target) {
//   return str.substring(str.length - target.length) === target;
//   // console.log(strEnding === target);
// }
// console.log(confirmEnding("Bastian", "n"));
// // confirmEnding("Open sesame", "sesame");
/////////////////

// Repeat a String
// function repeatStringNumTimes(str, num) {
//   let newStr = "";
//   while (num-- > 0) newStr += str;
//   return newStr;
// }

// console.log(repeatStringNumTimes("abc", 3));

//Truncate a String
function truncateString(str, num) {
  return str.split("").splice(0, 8).join("") + ",,,";
  // return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
