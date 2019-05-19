const EventEmmiter = require('events');

const emmiter = new EventEmmiter();

// emmit means to create a noise or produce

//Event Listner
//Payload is available in the arguments of the function
emmiter.on('Message Logged', (arg)=>{ // eventArg, event
    console.log('Event Raised', arg);
})


// Event Raised // wE CAN ALSO PASS PAYLOAD WITH AN EVENT EMMITTER
// Best practice is to pass an object containing key pair values
emmiter.emit('Message Logged', {
    id: 1,
    name: "usman",
});
