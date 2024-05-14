const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  secondname: { type: String, required: true },
  age: { type: Number, required: true },
  haircolor: { type: String, required: true },
  addiction: { type: String, required: true },
});

module.exports = mongoose.model("Oldpeople", schema);
