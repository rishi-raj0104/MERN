// Searching on Objects 
let objArray = [
    {
        No : 1,
        Name : 'aaaaaaa'
    }
    ,
    {
        No : 2,
        Name : 'bbbbbb'
    }
]
console.log(objArray); 
console.log(objArray.includes({No:1,Name:"vvvvvv "})); //present but false
// For this we use callback function 
let obj = objArray.find((obj) => obj.Name === "aaaaaaa");
console.log(obj);