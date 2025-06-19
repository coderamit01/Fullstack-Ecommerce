import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    type: {type: String},
    desc: {type: String}
  },{
    timestamps: true,
    versionKey: false
  }
);

const LegalModel = mongoose.model('legal', DataSchema);

export default LegalModel;