//Node.js Tutorial for Beginners: Learn Node in 1 Hour | Mosh
//https://www.youtube.com/watch?v=TlB_eWDSMt4


// function sayHello(name) {
//     console.log("Hello " + name);
// }

// sayHello('Usman');

// We dont have the window and document object
//console.log(window , document); this will give  error


// Built Global Objects
// console()
// setTimeout() 
// clearTimeout()
// interval() //call function after a delay
// clearInterval() 
// We have window object in the browser. e.g , window.console.log
// We dont have window in node. 

// IN NODE WE HAVE "global"

// Only Global / Builtin objects are present in global.
// No user defined objects are added to global.
// Example 

var myName = "Usman";

console.log(global.myName); // output : undefined

// Myname is only present in this file 
// We will have to explicitly export it to be used in other files.
