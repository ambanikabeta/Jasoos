const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: { type: String, required: true }, // 'required' must be used as part of the field's type definition.
  image: {
    data: { type: Buffer, required: true }, // 'data' field must have type Buffer
    contentType: { type: String, required: true }, // 'contentType' must be a string
  },
  description: { type: String }, // Optional field, so no 'required' here
});

module.exports = mongoose.model("Image", imageSchema);
