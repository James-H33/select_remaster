var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Vehicle = require('../models/vehicleModel');


router.get('/collection/:id', function(req, res) {
  Vehicle.findById(req.params.id, function(err, invItem) {
    if(err) {
      console.log(err);
    } else {
      res.render('collection/collection', {item: invItem});
    }
  })
})


module.exports  = router;
