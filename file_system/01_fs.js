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
fs.writeFile("./mynewfile.txt", "My name is Usman", function(err) {
  if (err) {
    throw err;
  } else {
    console.log("File Created Successfully");
  }
});

// create a server and send responses

fs.writeFileSync("./latestfile.txt", "Lets learn Node");

fs.appendFile("./latestfile.txt", "My world", function(err) {
  if (err) console.log(err);
});

//Checks if file is accessible or not (Async)
fs.access("../01_node.js", rej => {
  if (rej) {
    console.log(rej.message);
  } else {
    console.log("File is accessible");
  }
});

//Checks if file is accessible or not (Sync) || Try Catch

try {
  fs.accessSync("../.02_fs.js");
  console.log("File Found");
} catch (rej) {
  console.log("my Error", rej.message);
}

//Checks if file is accessible or not (Async) || Async Await

// async function asycCall() {
//   let myFile = await fs.readFile("../01_node.js", null);
// console.log('Hello World',myFile);
// }
// asycCall();

// Async Calls using Async Functions

// async function asycCall(){
//   var myFileNew = await fs.readFile('../01_fs.js', null);
//   console.log("The File Says", myFileNew);
// }

// try {
//   var myFileNew = fs.readFile('../01_fs.js');
//   console.log("The File Says", myFileNew);
// } catch (error) {
//   console.log(error);
// }

// fs.readFile('../01_node.js')
// .then((res)=>{
//   console.log(res);
// })
// .catch((rej)=>{
//   console.log(rej.message);
// })

// Listen to File Acces Events
fs.watchFile('./abc1.txt', (current , previous)=>{
      if (current) {
        console.log(current);
      }else{
        console.log(previous);
      }
})


// Listen to File Acces Events
// fs.watch('./abc1.txt', (event , filename)=>{
//     console.log(filename);
// })


// fs.watch('./latestfile.txt',(event , filename)=>{
//   console.log(event, filename);
// })