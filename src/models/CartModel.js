import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    productId: {type: mongoose.Schema.Types.ObjectId, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, required: true},
    qty: {type: String,required: true},
    size: {type: String, required: true},
    color: {type: String, required: true}
  },{
    timestamps: true,
    versionKey: false
  }
);

const CartModel = mongoose.model('cart', DataSchema);

export default CartModel;