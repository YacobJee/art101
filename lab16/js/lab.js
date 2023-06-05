// index.js - Work with JSON to create a web page for XKCD comic.
// Author: Jacob Yee 
// Date: 6/5/2023


// Using the core $.ajax() method
$.ajax({
  // The URL for the request (from the api docs)
  url: "https://xkcd.com/614/info.0.json",
  // The data to send (will be converted to a query string)
  comicObj: { 
          // here is where any data required by the api 
          //   goes (check the api docs)
        },
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType : "json",
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(comicObj) {
      // do stuff
      console.log(comicObj);
      console.log(comicObj.title);
      $("#output").html("<h2>" + comicObj.title);
      console.log(comicObj.img);
      //$("#output").html("<img src '" + comicObj.img +"'>");
      var img = $("<img>");
      img.attr("src", comicObj.img);
      img.appendTo("#output")
      console.log(comicObj.alt);
      img.attr("title", comicObj.alt)
      
      


  },
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
  }
})
