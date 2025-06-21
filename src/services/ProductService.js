import mongoose from "mongoose";
import BrandModel from "../models/BrandModel.js";


export const BrandListService = async() => {
  try {
    const data = await BrandModel.find();
    return {status: "Success", data: data};
  } catch (err) {
    return {status: "Failed", error: err}.toString();
  }
}