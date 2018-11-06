const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema ({
  score: {
    type: [Number],
    required: true,
  },
  teams: {
    type: [String],
    required: true
  }
})

module.exports = mongoose.model('game', gameSchema);
