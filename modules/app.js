// https://youtu.be/TlB_eWDSMt4?t=1209

// When we define a function in browser
// It is available in window.function object.
// and if we define another function with the same name
// it overides the previous defination
//  so we avoid defination in the global scope
// this is dealt with modularity
// Every File in a node application is considered a module
// we will call this the "app" module.
// everything defined here will remain within the scope of this file only
// In OOP we say that these are private as in unavailable outside this container
// to use this in another we will need to export it .

//console.log(module);

// We will be importing out modules here

// To use all the objects we can use default export

//const name = require('./module_1'); // this will bring the whole export object (ES5)

// to use a particular object we can use name imports or exports in ES5 it is done like this.

// Best practice to load a module is to do it in a constant
// As we dont want to accidently override it 

const {name, endPoint , log} = require('./module_1');

// console.log(name, log, endPoint);

log(name);
