const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { PDI_TYPES } = require("./constants/pdi.types");

const schema = new Schema(
  {
    type: { type: String, required: true, enum: [PDI_TYPES] },
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: Number },
    lat:{Type:String},
    lng:{Type:String}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("pdi", schema);
