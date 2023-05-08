// index.js - work with anonymous functions and callbacks
// Author: Jacob Yee
// Date: 5/7/2023

// Constants

var nums = [1, 10, 25, 50, 100];

// Functions
function sqr(x) {
  var results = x* x;
  return results;
};

// Tests
console.log("2 squared is ", sqr(2));
console.log("55 squared is ", sqr(55));

console.log("My array: ", nums);

var result = nums.map(sqr);
// should return the square of eevry number in the array
console.log("Test of squaring every element in the array: ", result);

var result = nums.map(function(x) {
  return x + 420;
});
// should return [421, 430, 445, 470, 520]
console.log("Weed(420) plus every element in the array is: ", result);

var outputEl = document.getElementById("output")
outputEl.innerHTML = "Original Array: [" + nums + "] <br>" +
"Squared Array: [" + nums.map(sqr) + "] <br>" +
"Weeded Array (+420): [" + result + "]";