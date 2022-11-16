const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  eventName: {
    type: String,
    required:true,
  },
  date: {
    type: String,
    required:true,
  },
  venue: {
    type: String,
    required:true,
  },
  description: {
    type: String,
    required:true,
  },
  photo: {
    type:String,
    required:true,
  },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;

Event.count({}, function( err, count){
  console.log( "Number of Events:", count );
})