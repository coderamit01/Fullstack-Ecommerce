import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    brandName: {type: String, unique: true, required: true},
    brandImage: {type: String, unique: true},
  },{
    timestamps: true,
    versionKey: false
  }
);

const BrandModel = mongoose.model('brands', DataSchema);

export default BrandModel;