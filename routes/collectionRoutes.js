var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Vehicle = require('../models/vehicleModel');


router.get('/collection/:id', function(req, res) {
  Vehicle.findById(req.params.id, function(err, item) {
    console.log(item)
    if(err) {
      console.log(err);
    } else {
      res.render('collection/collection', { item });
    }
  })
})


module.exports  = router;
