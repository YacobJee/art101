// index.js - Work with conditionals to create a sortingHat program through a user's inputted name.
// Author: Jacob Yee
// Date: 5/18/23

// create a function that takes strings as an arguement to be sorted based off of the string's length
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor!"
  }
  else if (mod==1) {
    return "Slytherin!"
  }
  else if (mod==2) {
    return "Ravenclaw!"
  }
  else {
    return "Hufflepuff!"
  }
}

function houseInfo(house) {
  if (house == "Gryffindor!") {
    return "Gryffindor value bravery above all else. This means they're the people who are often reckless and who dive headfirst into situations without thinking through the consequences — though many Gryffindors view bravery as something else."
  }
  else if (house == "Slytherin!") {
    return "Slytherin value ambition above all else. They tend to be resourceful and cunning, determined to achieve their goals over all else. Sometimes, this comes at the cost of other people. But ambition in and of itself isn't a bad things, and many Slytherins reflect that."
  }
  else if (house == "Ravenclaw!") {
    return "Ravenclaws value intelligence above all else. They tend to be witty and enjoy learning, but these characteristics aren't set in stone. They're the thinkers of the world, the ones who enjoy pondering an issue and debating and often pride themselves on their own wisdom."
  }
  else if (house == "Hufflepuff!") {
    return "A Hufflepuff values loyalty above all else. They have a strong sense of morality and justice, and tend to be patient, hard workers. Their general “do-gooder” tendencies mean that they're the brunt of many jokes, but so many of these people are ones who ensure that the world is fair and working the way it should."
  }
}

// create a click listener to the button in the html
    //var myButton = document.getElementById("button");
    //myButton.addEventListener("click", function() {
      //var name = document.getElementById("input").value;
      //var house = sortingHat(name);
      //var info = houseInfo(house);
      //newText = "<p>The Sorting Hat says: 'Better be..." + house + "</p>" + "<p>" + info + "</p>" + "<p>Descriptions adapted from Emma Thomas (Quora)</p>";
      //document.getElementById("output").innerHTML = newText;
    //})

$("#myButton").click(function() {
  var name = $("#input").val();
  var house = sortingHat(name);
  var info = houseInfo(house);
  newText = "<p>The Sorting Hat says: 'Better be..." + house + "</p>" + "<p>" + info + "</p>" + "<p>Descriptions adapted from Emma Thomas (Quora)</p>";
  $("#output").html(newText);
})