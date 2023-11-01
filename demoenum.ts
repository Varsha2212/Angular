enum printMedia{
    Newspaper="NEWSPAPER",
    Newsletter="NEWSLETTER",
    Magazine="MAGAZINE",
    Book="BOOK"
}
//Access Enum element
console.log(printMedia.Newsletter.toLowerCase());

//Tuple
var employee:[number,string]=[100,"sarath"];
console.log(employee);
employee[1]=employee[1].concat("manager");
console.log(employee);

/*
    Anonymous function 
*/

let printMessage = ()=>console.log("Hello we are learning");
printMessage();

const arrString:string[]=['hello','world']

const converToUpperCase=(arrString:string[])=>{
    return arrString.map(item=> item.toUpperCase());
}

//call function
const arrNewArray:string[]=["apple","orange","banana"]
const upperCaseArray:string[]=converToUpperCase(arrNewArray);
console.log(upperCaseArray);