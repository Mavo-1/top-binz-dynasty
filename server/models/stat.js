// src/models/stat.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  season: { type: Schema.Types.ObjectId, ref: 'Season', required: true },
  passingYards: { type: Number, default: 0 },
  rushingYards: { type: Number, default: 0 },
  passingTDs: { type: Number, default: 0 },
  rushingTDs: { type: Number, default: 0 },
  record: { type: String },
  // Add any other attributes specific to your Stat model
});

module.exports = mongoose.model('Stat', statSchema);
