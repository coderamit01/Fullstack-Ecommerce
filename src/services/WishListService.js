import mongoose from "mongoose";
import { WishList } from "../controllers/WishListController.js";
import WishlistModel from "../models/WishlistModel.js";

const ObjId = mongoose.Types.ObjectId;

export const SaveWishListService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;

    await WishList.updateOne(reqBody, { $set: reqBody }, { upsert: true });
    return { status: "success", message: "Wish List Save Success" };
  } catch (err) {
    return { status: "Fail", message: "Something Went Wrong !" };
  }
};

export const RemoveWishListService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;

    await WishList.deleteOne(reqBody);
    return { status: "success", message: "Wish List Delete Success" };  

  } catch (err) {
    return { status: "Fail", message: err };
  }
};
export const WishListService = async (req) => {
  try {
    let user_id = new ObjId(req.headers.user_id);
    const matchStage = {$match: {userId: user_id}};

    const joinStageProduct = {$lookup:{from: "products",localField: "productId",foreignField: "_id",as:"product"}};
    const unwindProduct = {$unwind: "$product"};

    const joinStageCategory = {$lookup:{from: "categories",localField: "product.categoryID",foreignField: "_id",as:"category"}};
    const unwindCategory = {$unwind: "$category"};

    const joinStageBrand = {$lookup:{from: "brands",localField: "product.brandID",foreignField: "_id",as:"brand"}};
    const unwindBrand = {$unwind: "$brand"};

    const projection = {$project: {'_id':0,'userID':0,'createdAt':0,'updatedAt':0,'product._id':0,'product.categoryID':0,'product.brandID':0,'brand._id':0,'category._id':0}}

    const data = await WishlistModel.aggregate([matchStage,joinStageProduct,unwindProduct,joinStageCategory,unwindCategory,joinStageBrand,unwindBrand,projection]);

    return { status: "success", data: data };
  } catch (err) {
    return { status: "Fail", message: "Something Went Wrong !" };
  }
};
