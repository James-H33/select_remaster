var mongoose = require('mongoose');

var vehicleSchema = new mongoose.Schema({
  name: String,
  nameExt: String,
  year: String,
  images: [String],
  info: [String],
  histImage: [String],
})

module.exports = mongoose.model('Vehicle', vehicleSchema);
