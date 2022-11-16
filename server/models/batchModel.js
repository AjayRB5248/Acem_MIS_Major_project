const mongoose = require("mongoose");

const batchSchema = mongoose.Schema({
  batch: {
    type: String,
  },
  section: {
    type: String,
  },
});

const Batch = mongoose.model("batchSection", batchSchema);
module.exports = Batch;
