const fs = require("fs");
const http = require("http");

const server = http.createServer((req,res)=>{
    const jsonpath = fs.readFileSync(`../MyJson/jsondata.json`,"utf-8");
    // const jsonpath = fs.writeFileSync(`${__dirname}/MyJson/jsondata.json`,"utf-8");
    const jsonObj = JSON.parse(jsonpath);
    if(req.url == "/home")
    {
        res.end("Hello I am Home Page");
    }
    else if(req.url == "/contact")
    {
        res.writeHead(200,{"Content-type":"application/json"});
        res.end(jsonObj[0].email);
        console.log(fs.readFileSync(`../MyJson/jsondata.json`,"utf-8"));
    }
    else
    {
        res.writeHead(404,{"Content-Type":"text/html"})
        res.end("Page Not Found");
        console.log("Page Not Found.")
        
    }
});
server.listen(5050,()=>{
    console.log("Server run success..")
})