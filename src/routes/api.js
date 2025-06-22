
import express from 'express';
import { ProductBrandList, ProductCategoryList, ProductListByBrand, ProductListByCategory, ProductListBySmilier, ProductSliderList } from '../controllers/ProductController.js';
const router = express.Router();


// Product 
router.get('/ProductBrandList', ProductBrandList);
router.get('/ProductCategoryList', ProductCategoryList);
router.get('/ProductSliderList', ProductSliderList);
router.get('/ProductListByBrand/:brandId', ProductListByBrand);
router.get('/ProductListByCategory/:categoryId', ProductListByCategory);
router.get('/ProductListBySmilier/:categoryId', ProductListBySmilier);

export default router;