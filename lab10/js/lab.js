// index.js - Work with Javascript Events to sort or make an anagram of a user's inputted name.
// Author: Jacob Yee
// Date:5/15/23

// create a function that sorts an inputted name
function sortName(str) {
  return str.split('').sort().join('');
};


// create a variable that finds the button in the html
var buttonEl = document.getElementById("my-button");

//create an event handler that listens for a button click
buttonEl.addEventListener("click", function(){
  // get the name from the getit input in the html
  var name = document.getElementById("getit").value;
  var nameStr = "Hello, " + sortName(name);
  // change the text of the h1 to "Hello (sortedName)!"
  var helloEl = document.getElementById("hello-world");
  helloEl.innerHTML = nameStr;
})
