//node by defaults supports es6
// that is why arrow functions work

// var rect = {
//     perimeter: (x,y)=> (2*(x+y)),
//     area : (x,y)=> x * y,

// }

const rect = require("./node_enviroment/rectangle");

function solveRect(l, b) {
  console.log('Solving for the rectangle ' + l + ' ' + b);
  // if (l <= 0 || b<= 0) {
  //     console.log("Invalid Dimensions");
  // } else {
  //     console.log('The Area of the Rectangle is ' + area(l, b));
  //     console.log('The Perimeter of the Rectangle is ' + perimeter(l, b));
  // }

  // Async Js and Closure Example USING CALLBACKS AND Error Handling

  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("The Area of the Rectangle is " + rectangle.area());
      console.log("The Perimeter of the Rectangle is " + rectangle.perimeter());
    }
  });
}



solveRect(2, 4);
solveRect(0, 0);
solveRect(-2, -4);
solveRect(6, 0);
solveRect(8, 9);


console.log("This log is sync");
