const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = new mongoose.Schema({
  fullName: { type: String, default: '' },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

schema.set('toObject', {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
    delete result.password;
    return result;
  }
});

schema.methods.serialize = function() {
  return {
    username: this.username || '',
    fullName: this.fullName || '',
    id: this._id
  };
};

schema.methods.validatePassword = function(pwd) {
  const currentUser = this;
  return bcrypt.compare(pwd, currentUser.password);
};

schema.statics.hashPassword = function(pwd) {
  return bcrypt.hash(pwd, 10);
};

module.exports = mongoose.model('User', schema);
