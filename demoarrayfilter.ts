//declare array
//pascal case --class CalculateSum
//camel case    calculateInterest
//hungarian notation   int intAgeAboveSixty;

const arrNumbers: number[] = [1, 2, 3, 4, 5, 6]
arrNumbers.push(10);
arrNumbers.push(8);
arrNumbers.pop();
//filtering
const arrFilterNumber = arrNumbers.filter(x => x % 2 === 0);
console.log(arrFilterNumber);
//print Full Name

function printFullName(firstName: string, lastName: string = "cena") {
    console.log(`${firstName}${lastName}`);
}
printFullName("John");

//Reduce method
/*
calculate the sum of all elements in the array
*/

// function addNumbers(firstNum:number,secondNum:number)
// {
//     return firstNum+secondNum;
// } instead of this we can use this


const addNumbers = (firstNum: number, secondNum: number) => firstNum + secondNum;
const sumofNumbers: number = arrNumbers.reduce(addNumbers, 0);
console.log(sumofNumbers);


//odd numbers
//declare array
const arrNumb: number[] = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//filtering
const arrFilteredNumb = arrNumb.filter(x => x % 2 == 1);
console.log(arrFilteredNumb);