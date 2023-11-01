//ARRAY

let fruits:string[]=['Apple','Orange','Banana']
console.log(fruits);
console.log(fruits[1]);

//Multi-type Array
let fruitsdemo:(string|number)[]=['Apple',100,'Orange',200,'Banana',300]
for(var fruit in fruitsdemo)
{
    console.log(fruitsdemo[fruit])
}

//Sort array
var sortedArray:String[]=fruits.sort();
console.log(sortedArray);

//Descending order

var sortedArrayInDesc: String[]=fruits.sort((first,second)=>{
    if(first>second)
    {
        return -1;//Descending order
    }
    if(first<second)
    {
        return 1;
    }
    return 0;
});
console.log(sortedArrayInDesc,"Sorted");

