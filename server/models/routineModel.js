const mongoose = require("mongoose");

const routineSchema = mongoose.Schema({
  batch: {
    type: String,
    required: true,
    },
    section: {
        type: String,
        required: true,
    },
    day:[{
        time:{
            type: String,
            required:true,
        },
        subject:{
            type: String,
            required:true,
        },
        teacherName:{
            type: String,
            required:true,
        },
        roomNo:{
            type: String,
            required:true,
        },
        
}]
});

const Routine = mongoose.model("Routine", routineSchema);
module.exports = Routine;
