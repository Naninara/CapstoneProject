const mongoose = require("mongoose");

const Sch = new mongoose.Schema({

  overallrating: String,
  gmail: String,
  rent_feedback: String,
  comments: String,
});

module.exports = mongoose.model("feedback", Sch);
