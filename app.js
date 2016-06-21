var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var seedDB      = require('./seed');

// Ports
var port = process.env.PORT || 4000;
var portIP = process.env.IP;

// Models
var Vehicle = require('./models/vehicleModel');

// Routes
var collectionRoutes = require('./routes/collectionRoutes');
var aboutRoutes      = require('./routes/aboutRoutes');
var contactRoutes    = require('./routes/contactRoutes');

mongoose.connect('mongodb://localhost/select_vettes_produciton');
// mongoose.connect('mongodb://retsbud:String33@ds043398.mlab.com:43398/s_vettes')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

// Seed Database with Intventory Items
seedDB();

app.get('/', function(req, res) {
  res.redirect('/home');
})

app.get('/home', function(req, res) {
  Vehicle.find({}, function(err, invItems) {
    if(err) {
      console.log(err);
    } else {
      res.render('index', {items: invItems});
    }
  })
})

// USE ROUTES
app.use('/', collectionRoutes);
app.use('/', aboutRoutes);
app.use('/', contactRoutes);

app.listen(port, portIP, function(server){
  console.log('Server has started...');
})
