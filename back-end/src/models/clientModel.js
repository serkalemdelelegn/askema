const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  testimonial: String,
  image: {
    name: String,                                             
    data: Buffer,
    contentType: String
  },
});

module.exports = mongoose.model('Client', clientSchema);