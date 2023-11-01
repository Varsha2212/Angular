"use strict";
// function numberToArray(number: number): number[] {
//     let numberStr = number.toString(); 
//     let digitsArray = numberStr.split('').map(Number);
//     return digitsArray;
//   }
//   let number = 7895;
//   let digitsArray = numberToArray(number);
//   console.log(digitsArray);
//------------------------------------------------------
//   function capitalizeFirstLetter(inputString: string): string {
//     if (inputString.length === 0) {
//       return inputString; // Handle empty string
//     }
//     const firstLetter = inputString[0].toUpperCase();
//     const restOfString = inputString.slice(1);
//     return firstLetter + restOfString;
//   }
//   const inputString = "varsha";
//   const capitalizedString = capitalizeFirstLetter(inputString);
//   console.log(capitalizedString);
//   //-----------------------------------------------------------------
function removeNonPrintableCharacters(inputString) {
    // Use a regular expression to match non-printable ASCII characters and replace them with an empty string.
    return inputString.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
}
const inputString = 'Hello\x00World\x1F';
const cleanedString = removeNonPrintableCharacters(inputString);
console.log(cleanedString);
