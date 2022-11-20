const mongoose = require("mongoose");

const batchSchema = mongoose.Schema({
  batch: {
    type: String,
    required:true,
    unique:true,
  },
  section: {
    type: String,
    required:true,
   
  },
});

const Batch = mongoose.model("batchSection", batchSchema);
module.exports = Batch;
