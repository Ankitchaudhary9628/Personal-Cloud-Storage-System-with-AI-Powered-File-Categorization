const mongoose = require('mongoose');
const FileSchema = new mongoose.Schema({
  userId: String,
  name: String,
  url: String,
  type: String,
  createdAt: { type: Date, default: Date.now },
  category: String,
});
module.exports = mongoose.model('File', FileSchema);
