//Importing Builtin Modules.
const path = require('path');


var pathObject = path.parse(__filename);

console.log(pathObject);


//get file name with extension

var baseName = path.basename('../01_node.js');

console.log(baseName);


console.log(path.normalize('../..//.//./01_node.js').toString()); // ..\..\01_node.js


