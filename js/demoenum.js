"use strict";
var printMedia;
(function (printMedia) {
    printMedia["Newspaper"] = "NEWSPAPER";
    printMedia["Newsletter"] = "NEWSLETTER";
    printMedia["Magazine"] = "MAGAZINE";
    printMedia["Book"] = "BOOK";
})(printMedia || (printMedia = {}));
//Access Enum element
console.log(printMedia.Newsletter.toLowerCase());
//Tuple
var employee = [100, "sarath"];
console.log(employee);
employee[1] = employee[1].concat("manager");
console.log(employee);
/*
    Anonymous function
*/
let printMessage = () => console.log("Hello we are learning");
printMessage();
const arrString = ['hello', 'world'];
const converToUpperCase = (arrString) => {
    return arrString.map(item => item.toUpperCase());
};
//call function
const arrNewArray = ["apple", "orange", "banana"];
const upperCaseArray = converToUpperCase(arrNewArray);
console.log(upperCaseArray);
