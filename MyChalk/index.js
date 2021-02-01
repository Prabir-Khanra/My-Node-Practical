// const fs = require("fs");

// // fs.mkdirSync("Thapa");
// // const value = fs.writeFileSync("test.txt","Hello Prabir Khanra");
// // console.log(fs.readFileSync("test.txt","utf8"));
// fs.renameSync("test.txt","now.txt");

const http = require("http");
const server = http.createServer((req,res)=>{
    res.end("Hello Prabir Khanra");
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Server run successfully");
})