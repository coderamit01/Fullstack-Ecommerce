import mongoose from "mongoose";
import BrandModel from "../models/BrandModel.js";
import CategoryModel from './../models/CategoryModel.js';
import ProductSlider from "../models/ProductSliderModel.js";
import ProductModel from "../models/ProductModel.js";

const objId = mongoose.Types.ObjectId;

// Brand 
export const BrandListService = async () => {
  try {
    const data = await BrandModel.find();
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", error: err }.toString();
  }
}
// Category 
export const CategoryListService = async () => {
  try {
    const data = await CategoryModel.find();
    return { status: "Success", data: data };
  } catch (err) {
    return { status: "Failed", error: err }.toString();
  }
}
// Product Sliders 
export const SliderListService = async () => {
  try {
    const data = await ProductSlider.find();
    return {status: "Success", data: data}
  } catch (error) {
    return { status: "Failed", error: err }.toString();
  }
}
// Product List By Brand 
export const ProductListByBrandService = async (req) => {
  try {
    const brandId = new objId(req.params.brandId);
    const matchStage = {$match: {brandID: brandId}};
    const joinWithBrandStage = {
      $lookup: {
      from: "brands",
      localField: "brandID",
      foreignField: "_id",
      as: "brand"
    }}
    const joinWithCategoryStage = {
      $lookup: {
      from: "categories",
      localField: "categoryID",
      foreignField: "_id",
      as: "category"
    }};

    const unwindBrandStage = {$unwind: "$brand"};
    const unwindCategoryStage = {$unwind: "$category"};

    const projectionStage = {
      $project: {
        _id: 0,
        "brand._id": 0,
        "category._id": 0,
      }
    };
    const data = await ProductModel.aggregate([ 
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
    const categoryId = new objId(req.params.categoryID);
    const matchStage = {$match:{categoryID: categoryId}};
    const joinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand"
      }
    };
    const joinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category"
      }
    };
    const unwindBrandStage = {$unwind: "$brand"};
    const unwindCategoryStage = {$unwind: "$category"};

    const projectionStage = {$project: {
      $project: {
        _id: 0,
        "brand._id": 0,
        "category._id": 0,
      }
    }};
    const data = await ProductModel.aggregate([ 
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
    const categoryId = new objId(req.params.categoryID);
    const matchStage = {$match:{categoryID: categoryId}};
    const limitStage = {$limit: 10};
    const joinWithBrandStage = {
      $lookup: {
        from: "brands",
        localField: "brandID",
        foreignField: "_id",
        as: "brand"
      }
    };
    const joinWithCategoryStage = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category"
      }
    };
    const unwindBrandStage = {$unwind: "$brand"};
    const unwindCategoryStage = {$unwind: "$category"};

    const projectionStage = {$project: {
      $project: {
        _id: 0,
        "brand._id": 0,
        "category._id": 0,
      }
    }};
    const data = await ProductModel.aggregate([ 
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
