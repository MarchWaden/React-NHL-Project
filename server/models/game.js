const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema ({
  score: {
    type: [Number],
    required: true,
  },
  teams: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: 'team'}],
    required: true
  }
})

module.exports = mongoose.model('game', gameSchema);
