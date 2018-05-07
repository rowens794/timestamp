var express = require('express');
var moment = require('moment');
var router = express.Router();

var jsonTime = {
  unix: 0,
  natural: ""
};


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("directions");
});

/* GET home page. */
router.get('/:timeString', function(req, res, next) {
  dateString = req.params.timeString;

  if (!moment(dateString).isValid()){
    res.render("directions");
    return;
  }

  jsonTime.unix = moment(dateString).unix();
  jsonTime.natural = moment(dateString).format("MMMM Do YYYY");

  res.send(jsonTime);
});

module.exports = router;
