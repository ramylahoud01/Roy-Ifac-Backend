const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    Date: { type: Date, required: true }, 
    Duration: { type: Number, required: true } 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventsSchema);
