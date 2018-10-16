const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

questionSchema.set('timestamps', true);

module.exports = mongoose.model('Question', questionSchema);

questionSchema.set('toObject', {
  virtuals: true, // include built-in virtual `id`
  transform: (doc, ret) => {
    delete ret._id; // delete `_id`
    delete ret.__v;
  }
});
