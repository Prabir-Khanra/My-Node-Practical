// Node.js has built in modules,named events 
// By which we can create ,fire and listen a event

// Steps:
// 1. Registering the event for fire only one time 
// 2. Create a event emmiter instance and register a couple of callbacks
// 3. registering for the event for a callback perameter

const EventEmitter = require('events');
const event = new EventEmitter();

// registering tow callback for one event. and it is possibe in node.js
event.on("myname",()=>{
    console.log("Hello I am Prabir Khanra");
})
event.on("myname",()=>{
    console.log("I am second callback");
});
// calling the event 
event.emit("myname");