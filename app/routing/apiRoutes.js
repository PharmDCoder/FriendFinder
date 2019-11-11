// ===============================================================================
// LOAD DATA
// We are linking our routes to the hard coded friends' data in the friends.js file
// ===============================================================================

var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================
//exports the express route
module.exports = function(app) {
  // API GET Requests makes the friends array data available to the $get. method in survey.html
  // ---------------------------------------------------------------------------

  app.get("/api/results", function(req, res) {
    res.json(friends);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // When a user submits form data (a JSON object)
  // ...the JSON is pushed to the friendsArray
  // (User fills out the friend survey... this data is then sent to the server...
  // Then the server saves the data to the friendsArray)
  // ---------------------------------------------------------------------------

  app.post("/api/results", function(req, res) {
    //this receives the $.post results from the survey and allows the JSON data to be pushed to the friendsArray
      friends.push(req.body);
  });

};