const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  rating: { type: Number, required: true },
  comment: { type: String },
  event: { type: Schema.Types.ObjectId, ref: 'Event' },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Review', ReviewSchema);
