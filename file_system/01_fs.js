const fs = require("fs");

//Async File Call
fs.readFile("abc1.txt", "utf8", function(err, contents) {
  if (err) {
    console.log("File not Found1");
  } else {
    console.log(contents);
  }
});


//Sync File Call, they dont take call backs
const myFile = fs.readFileSync("abc1.txt", "utf8");

console.log("Sync", myFile);

// Create a New File Async
fs.writeFile('./mynewfile.txt', "My name is Usman", function (err, res) {
        if (err) {
            throw err
        } else {
            console.log("File Created Successfully");
        }
})


// create a server and send responses

fs.writeFileSync('./latestfile.txt', "Lets learn Node")


fs.appendFile('./latestfile.txt', "My world", function (err,) {
          if (err)
            console.log(err);
})