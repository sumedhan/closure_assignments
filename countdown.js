// Implement a function countdownGenerator() that takes in a number x and returns a function
// that counts down when it is called (see starter code below).


var countdownGenerator = function (x) {
  /* your code here */
  var index = x;

  return function () {
    var message = "";
    if (index > 0)  {
      message = "T-minus " + index + "...";
    }
    if (index === 0) {
      message = "Blast Off!"
    }
    if (index < 0) {
      message = "Rockets already gone, bub!"
    }
    console.log(message);
    index--;
  }
};

var countdown = countdownGenerator(2);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!