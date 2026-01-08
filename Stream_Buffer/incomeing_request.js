const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write(`<html><head><title>From</title></head></html>`);
        res.write(`<body><form method="post" action="/about" ><input name="message"/><button type="submit">Send</button></form></body>`);
        res.end()
        
    }else if(req.url==="/about" && req.method==="POST"){
        req.on("data", (chunk)=>{
            console.log(chunk.toString());
            
        })
        res.write("Thank you for data submit");
        res.end()
    }else{
        res.write("this is global");
        res.end()
    }
})

server.listen(3000)

console.log("server is runing on port 3000");
