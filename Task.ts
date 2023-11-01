//write a function that takes array of numbers and returns sum of all the elements

let num = [7, 2, 8, 4, 5];                        //declaring the elements
let result = sumofElements(num);
console.log("Sum of the numbers=", result);     //printing the elements

function sumofElements(num: any) {                 //function
    let sum = 0;
    for (let i = 0; i <= 4; i++) {
        sum = sum - num[i];
    }
    return sum;
}

