// src/models/user.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  currentTeam: { type: Schema.Types.ObjectId, ref: 'Team' },
  careerRecord: { type: String },
  currentStats: {
    passingYards: { type: Number, default: 0 },
    rushingYards: { type: Number, default: 0 },
    passingTDs: { type: Number, default: 0 },
    rushingTDs: { type: Number, default: 0 },
  },
});

module.exports = mongoose.model('User', userSchema);

  
  
  
  