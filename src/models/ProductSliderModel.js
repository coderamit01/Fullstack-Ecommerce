import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    title: {type: String, required: true},
    desc: {type: String, required: true},
    price: {type: String, required: true},
    image: {type: String, required: true},
    productId: {type: mongoose.Schema.Types.ObjectId, required: true},
  },{
    timestamps: true,
    versionKey: false
  }
);

const ProductSlider = mongoose.model('productsliders', DataSchema);

export default ProductSlider;