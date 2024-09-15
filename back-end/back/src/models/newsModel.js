const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  link: String,
  image: {
    name: String,                                             
    data: Buffer,
    contentType: String
  },
  time: String,
  company: String
});

module.exports = mongoose.model('News', newsSchema);
