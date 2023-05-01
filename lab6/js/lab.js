// index.js - An exercise of arrays and objects.
// Author: Jacob Yee
// Date: 4/30/2023

// Variables

var myTransport = ["Legs", "Bus", "Car", "Bike"];

// Objects

var myMainRide ={
  make: "Honda",
  model: "Taurus",
  color: "Silver",
  year: 2010,
  age: function() {
      return 2023 - this.year;
  }
};

// Output

document.writeln("How I get around the place: " + myTransport + "<br>");

document.writeln("The car I own and never use: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>"
);