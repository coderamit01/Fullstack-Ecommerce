import mongoose from "mongoose";
import BrandModel from "../models/BrandModel.js";
import CategoryModel from './../models/CategoryModel.js';
import ProductSlider from "../models/ProductSliderModel.js";
import ProductModel from "../models/ProductModel.js";

const objId = mongoose.Types.ObjectId;

// Brand 
export const BrandListService = async () => {
  try {
    let data = await BrandModel.find();
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", error: err }.toString();
  }
}
// Category 
export const CategoryListService = async () => {
  try {
    let data = await CategoryModel.find();
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", error: err }.toString();
  }
}
// Product Sliders 
export const SliderListService = async () => {
  try {
    let data = await ProductSlider.find();
    return {status: "Success", data: data}
  } catch (error) {
    return { status: "Failed", error: err }.toString();
  }
}
// Product List By Brand 
export const ProductListByBrandService = async (req) => {
  try {
    let brandId = new objId(req.params.brandId);
    let matchStage = {$match: {brandID: brandId}};
    let joinWithBrandStage = {
      $lookup: {
      from: "brands",
      localField: "brandID",
      foreignField: "_id",
      as: "brand"
    }}
    let joinWithCategoryStage = {
      $lookup: {
      from: "categories",
      localField: "categoryID",
      foreignField: "_id",
      as: "category"
    }};

    let unwindBrandStage = {$unwind: "$brand"};
    let unwindCategoryStage = {$unwind: "$category"};

    let projectionStage = {
      $project: {
        _id: 0,
        "brand._id": 0,
        "category._id": 0,
      }
    };
    let data = await ProductModel.aggregate([ 
      matchStage,
      joinWithBrandStage,
      joinWithCategoryStage,
      unwindBrandStage,
      unwindCategoryStage,
      projectionStage
    ]);

    return {status:"Success", data: data};

  } catch (err) {
    return { status: "Failed", error: err }.toString();
  }
}

//Product List by Category
export const ProductListByCategoryService = async(req) => {
  try {
    let categoryId = new objId(req.params.categoryID);
    let matchStage = {$match:{categoryID: categoryId}};
    let joinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand"
      }
    };
    let joinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category"
      }
    };
    let unwindBrandStage = {$unwind: "$brand"};
    let unwindCategoryStage = {$unwind: "$category"};

    let projectionStage = {$project: {
      $project: {
        _id: 0,
        "brand._id": 0,
        "category._id": 0,
      }
    }};
    let data = await ProductModel.aggregate([ 
      matchStage,
      joinWithBrandStage,
      joinWithCategoryStage,
      unwindBrandStage,
      unwindCategoryStage,
      projectionStage
    ]);

    return {status:"Success", data: data};

  } catch (err) {
    return { status: "Failed", error: err }.toString();
  }
}
//Product List by Similer
export const ProductListBySimillerService = async(req) => {
  try {
    let categoryId = new objId(req.params.categoryId);
    let matchStage = {$match:{categoryID: categoryId}};
    let limitStage = {$limit: 10};
    let joinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand"
      }
    };
    let joinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category"
      }
    };
    let unwindBrandStage = {$unwind: "$brand"};
    let unwindCategoryStage = {$unwind: "$category"};

    let projectionStage = {$project: {
      $project: {
        _id: 0,
        "brand._id": 0,
        "category._id": 0,
      }
    }};
    let data = await ProductModel.aggregate([ 
      matchStage,
      limitStage,
      joinWithBrandStage,
      joinWithCategoryStage,
      unwindBrandStage,
      unwindCategoryStage,
      projectionStage
    ]);

    return {status:"Success", data: data};

  } catch (err) {
    return { status: "Failed", error: err }.toString();
  }
}
//Product List by Similer
export const ProductListByKeywordService = async(req) => {
  try{
        let SearchRegex={"$regex":req.params.Keyword, "$options":"i"}
        let SearchParams=[{title:SearchRegex},{shortDes:SearchRegex}]
        let SearchQuery={$or:SearchParams}

        let MatchStage={$match:SearchQuery}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  ProductModel.aggregate([
            MatchStage, JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage,ProjectionStage
        ])
        return {status:"success",data:data};
    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}
//Product List by Similer
export const ProductListByRemarkService = async(req) => {
  try{
        let remark=req.params.remark;
        let MatchStage={$match:{remark:remark}};

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  ProductModel.aggregate([
            MatchStage, JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage,ProjectionStage
        ])
        return {status:"success",data:data};
    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}
//Product List by Similer
export const ProductDetailsService = async(req) => {
  try{
        let productId= new objId(req.params.productId);
        let MatchStage={$match:{_id:productId}};

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let JoinWithDetailsStage={$lookup:{from:"productdetails",localField:"_id",foreignField:"productID",as:"details"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"};
        let UnwindDetailsStage={$unwind:"$category"};
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  ProductModel.aggregate([
            MatchStage, JoinWithBrandStage,JoinWithCategoryStage,JoinWithDetailsStage,
            UnwindBrandStage,UnwindCategoryStage,UnwindDetailsStage,ProjectionStage
        ])
        return {status:"success",data:data};
    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}
