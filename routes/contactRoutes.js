var express = require('express');
var router = express.Router();

router.get('/contact', function(req, res) {
  res.render('contact/contact');
});

module.exports = router;
