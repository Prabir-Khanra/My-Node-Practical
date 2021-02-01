// Node.js has built in modules,named events 
// By which we can create ,fire and listen a event

// Steps:
// 1. Registering the event for fire only one time 
// 2. Create a event emmiter instance and register a couple of callbacks
// 3. registering for the event for a callback perameter

const MyeMitter = require('events');
const myevent = new MyEmitter();
// Registering a callback with perameter
myevent.on("mystatus",(sc,msg)=>{
    console.log(`Status code is ${sc} and Page processing is ${msg}`);
})
// firing event 
myevent.emit('mystatus',200,"ok");

//try,if the 'MyEmitter' -name was 'myemitter'              ANS: No Problem.No Error.