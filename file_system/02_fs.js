const fs = require('fs');

//====ASYNC ======
console.log("Sync 1");

const files = fs.readdirSync('./'); // Will take time according to folder structure or file size
//I/O is blocked in sync

console.log("Sync 2", files);



//PARSE Method