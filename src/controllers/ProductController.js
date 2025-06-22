import { BrandListService, CategoryListService, ProductListByBrandService, SliderListService } from "../services/ProductService.js"



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
  const result = await ProductListByBrandService();
  return res.status(200).json(result);
}
