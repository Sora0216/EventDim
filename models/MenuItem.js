const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  photoUrl: { type: String },
  event: { type: Schema.Types.ObjectId, ref: 'Event' },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);