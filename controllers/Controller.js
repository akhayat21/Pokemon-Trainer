var express = require("express");
var router = express.Router();
var pokemon = require("../models/pokemon.js");


router.get("/", function(req, res) {
  pokemon.all(function(data) {
    var hbsObject = {
      pokemon: data
    };
     res.render("index", hbsObject);
  });
});

router.post("/api/pokemon", function(req, res) {
  console.log(req.body)
  pokemon.create([
    "name", "caught"
  ], [
    req.body.name, req.body.caught
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/pokemon/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  pokemon.update({
    caught: 1
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
