// 1. Convert to JSON
// 2. Add all the content to another file
// 3. readFile
// 4.Again back to json object 
// 5.console.log();
const fs = require("fs");
const biodata = {
    name:"Prabir Khanra",
    age:"26",
    task:"Thapa Technical"
}

const jsonBio = JSON.stringify(biodata);
fs.writeFileSync("data.txt",jsonBio);
console.log(fs.readFileSync("data.txt","utf8"));
const jsonObj = JSON.parse(jsonBio);
console.log(jsonObj);