import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
  {
    productId: {type: mongoose.Schema.Types.ObjectId, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, required: true},
    desc: {type: String},
    ratting: {type: String, required: true}
  },{
    timestamps: true,
    versionKey: false
  }
);

const ReviewModel = mongoose.model('reviews', DataSchema);

export default ReviewModel;