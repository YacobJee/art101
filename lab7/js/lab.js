// index.js - Write functions in Javascript
// Author: Jacob Yee
// Date: 5/3/2023

// Constants

// Functions

// sortName - a function that takes user inputs and sorts the letters of their name
function sortName() {
    // ask for user's name
    var userName = window.prompt("Hello, tell me your name so I can fix it.");
    console.log("userName =", userName);
    // turn all letters into lowercase
    var lowerCase = userName.toLowerCase();
    console.log("lowerCase =", lowerCase)
    // turn string into an array
    var nameArray = lowerCase.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraysort = nameArray.sort();
    console.log("nameArraysort =", nameArraysort);
    // turn sorted array into a string
    var sortedName = nameArraysort.join('');
    console.log('sortedName =', sortedName); 
    // return results;
    return sortedName;
}


// output
document.writeln("There, all fixed: ",
    sortName(), "       You're welcome. </br>")