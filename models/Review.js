const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Review', ReviewSchema);
