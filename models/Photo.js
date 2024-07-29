const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  url: { type: String, required: true },
  event: { type: Schema.Types.ObjectId, ref: 'Event' },
  uploadedBy: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Photo', PhotoSchema);
