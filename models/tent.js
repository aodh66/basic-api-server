//model
const mongoose = require("mongoose")
const { Schema } = mongoose

const TentSchema = new Schema({
    name:  {
      type: String,
      required: true,
    },
    type:  {
      type: String,
      required: true,
    },
    weight:  {
      type: String,
      required: true,
    },
    poles: {
      type: String,
      required: true,
    }
})

const Tent = mongoose.model("Tent", TentSchema)

module.exports = Tent