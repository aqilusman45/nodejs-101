// Here we will define some functions and variables

var myName = "Usman";
var url = 'http://www.google.com';

function logger(name) {
    console.log(name);
}

// now we will use the module object
// to export out functions and variables.

// by adding a new method or property to the module object
// using dot notation

// function export
module.exports.log = logger;

// variable export 
module.exports.name = myName;

module.exports.endPoint = url;
