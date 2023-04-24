// index.js - Hangman; An Implementation of the Game
// Author: Jacob Yee (jaryee@ucsc.edu)
// Date:4/24/2023



//Psuedocode: Hangman
  //Print a tree
  //Create a constant variable word bank list
    //add every letter of the alphabet to the list 
  //Ask user to type in a word or ask computer to generate a word
    //If generated, ask for user input in the form of a number of letters
  //Loop through each letter in the generated word
    //print "_" 
    //append letter to an empty list "answer"
  //ask for user input (letter)
  //Loop through each letter in "answer"
    //if user input is not in "answer," return incorrect
    //if user input is in "answer," return correct
  //if return incorrect, draw a piece of the man hanging form the tree (or subtrract a life from the life counter)
    //print incorrect letters
  //if return correct
    //loop through "answer"
      //for each time the user input is in answer, replace the dashes in the stringg with the letter intheir proper position
  //check for win/lose condition
    //if all lives are gone or head, body, arms, and legs of stickman on tree, Game over
    //if all dashes are filled, the user wins
  //ask if the user wants to play again or end the game
  
// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
