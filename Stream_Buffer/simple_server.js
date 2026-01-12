const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8')
    //give data in browser or user like output.txt
    readStream.pipe(res)
   
})

server.listen(3000)

console.log("server is runing on port 3000");


//wright stream


