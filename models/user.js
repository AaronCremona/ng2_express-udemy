var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validator = require('mongoose-unique-validator');
// mongoose doesn't enforce uniqueness on its own - this plugin adds that functionality

var schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  messages: { type: [{ type: Schema.Types.ObjectId }], ref: 'Message' }
});

schema.plugin(validator);

module.exports = mongoose.model('User', schema);
