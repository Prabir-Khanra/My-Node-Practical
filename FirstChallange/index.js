const fs = require("fs");
// fs.mkdir("Thapa");
fs.mkdirSync("Thapa");
// fs.mkdir("Hello")
fs.writeFileSync("Thapa/bio.txt","hello Prabir are you ok");
fs.appendFileSync("Thapa/bio.txt","   More data added successfully....");
//To encrypt,you can write "UTF-8" or "utf8" any one.Both will work same.
fs.readFile("Thapa/bio.txt","UTF-8",function(error,data){
    if(error)
        console.log("Error occures");
    else
        console.log(data);
});
// fs.renameSync("bio.txt","new.txt");
// fs.unlinkSync("new.txt");//To delete file
// fs.rmdirSync("Thapa");//To remove the direcory of folder