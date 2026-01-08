const fs = require("fs")

//option 1 using chunk
const obt = fs.createReadStream(`${__dirname}/bigdata.txt`)

//option 1 using chunk
obt.on('data', (chunk)=>{
console.log(chunk.toString());

})

//option 2 using encoding chunk "utf8"
const obtwo= fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8')

//now we find derectly data 
obtwo.on("data", (data)=>{
    console.log(data);
})

//now if we create a console.log("hello") , this first execute hello because .on lectioning thats why when complite his lection than give the result . so thats why hello prent first than other stream data 
console.log("hello");

