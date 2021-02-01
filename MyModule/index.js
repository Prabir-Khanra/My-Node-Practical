// 1st rule 
// const add = require("./oper");
// console.log(add(5,4));

// 2nd rule 
// const value = require("./oper");
// console.log(value.add(5,4));
// console.log(value.sub(5,4));
// console.log(value.multi(5,4));
// console.log(value.name);
// console.log(value);

// 3rd rule 
//here name will be same with the name of exported module name.if not,error will be occured.
const {add,sub,name,multi} = require("./oper");
console.log(add(5,4));
console.log(sub(5,4));
console.log(multi(5,4));
console.log(name);