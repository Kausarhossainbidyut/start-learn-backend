const EventEmitter = require("events")

const emitter = new EventEmitter()

emitter.on("bellRing", ({period, text})=>{
    console.log(`Hello from event ${period} ${text}`);
    
})

emitter.emit("bellRing",{
    period: "first",
    text:"period end"
})

