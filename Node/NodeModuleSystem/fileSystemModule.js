const fs = require("fs");
const files = fs.readdirSync("./");

// SUCCESS SIMULATION
fs.readdir("./", (err, files) => {
  err ? console.log(err) : console.log(files);
});

// ERROR SIMULATION
fs.readdir("./123", (err, files) => {
  err ? console.log(err) : console.log(files);
});

console.log(files);
