// exports.rect = {
//     perimeter: (x,y)=> (2*(x+y)),
//     area : (x,y)=> x * y,
// }

// or

// exports.perimeter = (x,y)=> (2*(x+y));

// exports.area = (x , y) => (x * y);

//Creating an Higher Order Functions that ACCEPTS A CALLBACK Function
// AND SIMULATES AN ASYNC FUNCTION USING setTimeOut();

//Now if you see that we can use x ,y perimeters in a fucntion that is inside a function
// this is called closure property
module.exports = (x, y, callback) => {
  if (x <= 0 || y <= 0) {
    setTimeout(() => {
      callback(new Error("Invalid Dimensions"), null);
    }, 2000);
  } else {
    setTimeout(() => {
      callback(null, {
        perimeter: () => 2 * (x + y),
        area: () => x * y
      });
    }, 2000);
  }
};
