const mongoose = require('mongoose');
const team = require('./team');

const userSchema = new mongoose.Schema ({
    username:  {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    favoriteTeam: {
      type: {type: mongoose.Schema.Types.ObjectId, ref: 'team'}
    }
})

module.exports = mongoose.model('User', userSchema);
