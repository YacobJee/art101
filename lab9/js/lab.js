// index.js - Experiment with DOM manipulation
// Author: Jacob Yee
// Date:5/10/2023



// create a variable that connects to the div 
var outputEl = document.getElementById("output");

// creates a variable that makes a new <p> 
var new1El = document.createElement("p");
new1El.id = "freud-id";

// change the html element of new1El to say something else
new1El.innerHTML = "Id is the unconcious desire.";

// makes a new element under new2El
var new2El = document.createElement("p");
new2El.id = "freud-ego";

// change html element of new2El to say something else
new2El.innerHTML = "Ego acts upon the will of Id in any way possible.";

// Append both newEl's to the outputEl
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// change the css of at least two elements
outputEl.style.border = "dotted 1px white";
new1El.style.color = "white";
new2El.style.color = "darkblue";

// create a new element new3El
var new3El = document.createElement("p");
new3El.id = "freud";

// create text in the new element
new3El.innerHTML = "Freud created the concepts of the human Id and Ego.";

//push new3El on top rather than append. 
    //(stack overflow was used to find the method)
outputEl.prepend(new3El);