const fs = require("fs")

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`)
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`)

//data chunk akare pase korbe
// ourReadStream.on("data", (chunk)=>{
//     ourWriteStream.write(chunk)
// })

//short waya to data wrigt 

ourReadStream.pipe(ourWriteStream)