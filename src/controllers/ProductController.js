import { BrandListService, CategoryListService, ProductDetailsService, ProductListByBrandService, ProductListByCategoryService, ProductListByKeywordService, ProductListByRemarkService, ProductListBySimillerService, SliderListService } from "../services/ProductService.js"



// Brand 
export const ProductBrandList = async (req, res) => {
  const result = await BrandListService();
  return res.status(200).json(result);
}
// Category 
export const ProductCategoryList = async (req, res) => {
  const result = await CategoryListService();
  return res.status(200).json(result);
}
// Product Sliders 
export const ProductSliderList = async (req, res) => {
  const result = await SliderListService();
  return res.status(200).json(result);
}
// Product List By Brand 
export const ProductListByBrand = async (req, res) => {
  const result = await ProductListByBrandService(req);
  return res.status(200).json(result);
}
// Product List By Category
export const ProductListByCategory = async(req,res) => {
  let result = ProductListByCategoryService(req);
  return res.status(200).json(result);
}
// Product List By Smilier 
export const ProductListBySmilier = async(req,res) => {
  let result = await ProductListBySimillerService(req);
  return res.status(200).json(result);
}
// Product List By Keyword 
export const ProductListByKeyword = async(req,res) => {
  let result = await ProductListByKeywordService(req);
  console.log(result)
  return res.status(200).json(result);
}
// Product List By Remark 
export const ProductListByRemark = async(req,res) => {
  let result = await ProductListByRemarkService(req);
  return res.status(200).json(result);
}
// Product List By Remark 
export const ProductDetails = async(req,res) => {
  let result = await ProductDetailsService(req);
  return res.status(200).json(result);
}