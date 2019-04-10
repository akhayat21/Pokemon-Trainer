var orm = require("../config/orm.js");
var connection = require("../config/connection");

var pokemon = {
    all: function(cb) {
      orm.all("pokemon", function(res) {
        cb(res);
      });
    },
    create: function(cols, vals, cb) {
      orm.create("pokemon", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("pokemon", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

  module.exports = pokemon;