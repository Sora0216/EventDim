const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  photos: [{ type: Schema.Types.ObjectId, ref: 'Photo' }],
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
});

module.exports = mongoose.model('Event', EventSchema);
