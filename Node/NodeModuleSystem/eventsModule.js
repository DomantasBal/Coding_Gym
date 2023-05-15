const EventEmitter = require("events");
const emitter = new EventEmitter();

// Register a listener
emitter.on("messageLogged", () => {
  console.log("Listener Called");
});

// Raised an event
emitter.emit("messageLogged");
