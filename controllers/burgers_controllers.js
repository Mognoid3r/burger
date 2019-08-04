var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});
// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
  burger.all(function(burgerData) {
    res.render("index", {burger_data: burgerData});
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(
    req.body.burger_name, 
 function(result) {
   console.log(result);
    // Send back the ID of the new quote
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {
  burger.update(
    req.body.id,
   function(result) {
      res.sendStatus(200).end();
  });
});

// router.delete("/api/burgers/:id", function(req, res) {
//   var id = parseInt(req.params.id);

//   burger.delete(id, function(result) {
//     console.log(result);
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
//   res.status(200).end();
// });

// Export routes for server.js to use.
module.exports = router;
