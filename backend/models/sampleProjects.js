const mongoose = require('mongoose');

const sampleProjectSchema = new mongoose.Schema({
  projectSymbol: {
    type: String,
    required: true
  },
  projectTitle: {
    type: String,
    required: true
  },
  episodes: {
    type: Number,
    required: true,
  },
  weeks: {
    type: Number,
    required: true
  }
})

const SampleProjectModel = mongoose.model("Sample_projects", sampleProjectSchema);

module.exports = SampleProjectModel;