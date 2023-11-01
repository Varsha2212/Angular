"use strict";
//print values
// for(let i=1;i<=5;i++){
//     //in order to delay a task 
//     setTimeout(function()
//     {
//         console.log(i);
//     },4000)
//     console.log(i);
// }
//-----------------------------------------------------------------
for (let i = 1; i <= 5; i++) {
    //in order to delay a task by ms
    setTimeout(function () {
        console.log(i);
    }, 4000);
}
let first = 100;
let second = 200;
console.log(first == second);
console.log(first === second);
