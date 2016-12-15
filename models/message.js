var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
  content: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

// ref connects the two schemas

schema.post('remove', function(message) {
  User.findById(message.user, function(err, user) {
    user.messages.pull(mmessage);
    user.save();
  });
});

module.exports = mongoose.model('Message', schema);
