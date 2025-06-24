
import express from 'express';
import { ProductBrandList, ProductCategoryList, ProductDetails, ProductListByBrand, ProductListByCategory, ProductListByKeyword, ProductListByRemark, ProductListBySmilier, ProductSliderList } from '../controllers/ProductController.js';
const router = express.Router();


// Product 
router.get('/ProductBrandList', ProductBrandList);
router.get('/ProductCategoryList', ProductCategoryList);
router.get('/ProductSliderList', ProductSliderList);
router.get('/ProductListByBrand/:brandId', ProductListByBrand);
router.get('/ProductListByCategory/:categoryId', ProductListByCategory);
router.get('/ProductListBySmilier/:categoryId', ProductListBySmilier);
router.get('/ProductListByKeyword/:keyword', ProductListByKeyword);
router.get('/ProductListByRemark/:remark', ProductListByRemark);
router.get('/ProductDetails/:productId', ProductDetails);

export default router;