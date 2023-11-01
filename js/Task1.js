"use strict";
//write an arrow function that takes an array of numbers as a parameter 
//and returns a new array with each element multiplied by 2.
//hint:map()
const arr = [10, 20, 30, 40, 50]; // declaring the array elements
const newArr = (x) => x.map((x) => x * 2); // map to that array
const Result = newArr(arr);
console.log(Result); //printing the array
