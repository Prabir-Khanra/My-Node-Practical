const path = require("path");

console.log(path.basename("D:/Node Project/Thapa Node Challange/MyPath/index.js"));
console.log(path.dirname("D:/Node Project/Thapa Node Challange/MyPath/index.js"));
console.log(path.extname("D:/Node Project/Thapa Node Challange/MyPath/index.js"));

const oPath = path.parse("D:/Node Project/Thapa Node Challange/MyPath/index.js");
console.log(oPath);
console.log(oPath.name);