console.log("hey");
let reg = /hassan/;

reg = /hassan/g; //g mean global
reg = /hassan/i; // i means case insensitive

console.log(reg);
console.log(reg.source);


let s = "hey i m your intern hassan and also hassan ";
// function to match expressions

// 1. exec() - This function will return an array for match or null for no match

let result = reg.exec(s);
console.log(result);


// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);
