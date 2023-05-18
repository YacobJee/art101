// index.js - work with jQuery to create buttons within the html.
// Author: Jacob Yee
// Date: 5/17/23

//create buttons and append them to each
 $("#challenge").append("<button id='c-button'>Here's a Challenge!</button>");
 $("#problems").append("<button id='p-button'>Here's a Problem!</button>");
 $("#reflection").append("<button id='rf-button'>Here's a Reflection!</button>");


 //add click events to each button
 $("#c-button").click(function(){
  $(this).parent().toggleClass("back-color");
 });

 $("#p-button").click(function(){
  $(this).parent().toggleClass("back-color");
 });
 
 $("#rf-button").click(function(){
  $(this).parent().toggleClass("back-color");
 })

// create two buttons that change each other's colors, while reverting to their default color on click
 $("#results").append("<button id='button-x'>Here's the Results!</button>");
 $("#results").append("<button id='button-y'>No, I'm the Results!</button>");

 $("#button-x").click(function(){
  $("#button-x").removeClass("color-change");
  $("#button-y").toggleClass("color-change");
 });

 $("#button-y").click(function(){
  $(this).removeClass("color-change");
  $("#button-x").toggleClass("color-change");
 });