import mongoose from "mongoose";
import BrandModel from "../models/BrandModel.js";
import CategoryModel from './../models/CategoryModel.js';
import ProductSlider from "../models/ProductSliderModel.js";

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

  } catch (error) {
    return { status: "Failed", error: err }.toString();
  }
}
