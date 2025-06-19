import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    productId: {type: mongoose.Schema.Types.ObjectId, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, required: true}
  },{
    timestamps: true,
    versionKey: false
  }
);

const WishlistModel = mongoose.model('wishlist', DataSchema);

export default WishlistModel;