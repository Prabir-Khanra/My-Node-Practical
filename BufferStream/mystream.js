const fs = require("fs");
const http = require("http");
const { Stream } = require("stream");

const server = http.createServer();
// var i = 1;//for testing purpose
server.on('request',(req,res)=>{
    //// Process:1
    //// First process to read a file[Normal process]
    // fs.readFile("streaminfo.txt","utf-8",(error,data)=>{
    //     console.log(data);
    //     res.end(data);
    // })

    //// Process:2
    //// Second Process will be done through streamig
    //// Create a readable stream 
    //// Handle stream events - data,end and erro
    // const readstream = fs.createReadStream("streaminfo.txt");
    // i += 1;//for testing purpose
    // readstream.on("end",()=>{
    //     console.log("Streaming complete")
    //     res.end();//According to teachier,this line should be written here instead of writing data 
    //     event-fire section
    // })

    // readstream.on("error",()=>{
    //     console.log("Error occured")
    // })

    // readstream.on("finish",()=>{
    //     console.log("Finish");
    // })

    // readstream.on("data",(chunkdata)=>{
    //     res.write(chunkdata);
    //     console.log(chunkdata.toString(),"\n");
    //     res.end();//write this line here is my opinion.But ny tutor wrote this line to end 
                        // event-fire section
    // });
    // console.log("Number: ",i);//for testing purpose

    //// Process:3
    //// Streaming data through stream.pipe()
    //// This is more efficient and effective way
    const readstream = fs.createReadStream("streaminfo.txt");
    readstream.pipe(res);
});

server.listen(5050,"127.0.0.1",()=>{
    console.log("Server run success");
})