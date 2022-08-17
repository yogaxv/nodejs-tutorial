// Core Module
// File System
const fs = require('fs');
// const events = require("events");

try {
    // write string ke file (synchronous)
    if(!fs.existsSync("./log")) fs.mkdirSync("log");

    fs.appendFileSync('./log/LogApp.log', 'Hello world as synchronous\r');

} catch (e) {
    console.log(e);
}


fs.appendFile("./log/LogError.log", "Test error",(e) =>{
    console.log(e)
})

const data = fs.readFileSync('./log/LogApp.log');
console.log(data.toString());
