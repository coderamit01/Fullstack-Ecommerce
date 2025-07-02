
import express from 'express';
import { ProductBrandList, ProductCategoryList, ProductDetails, ProductListByBrand, ProductListByCategory, ProductListByKeyword, ProductListByRemark, ProductListBySmilier, ProductSliderList } from '../controllers/ProductController.js';
import { UserOTP, VerifyLogin } from '../controllers/UserController.js';
import { Authverification } from '../middlewares/Authverification.js';
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

//User 
router.get('/UserOTP/:email',UserOTP);
router.get('/VerifyLogin/:email/:otp',VerifyLogin);
// router.get('/UserLogOUt', Authverification);
// router.post('/CreateProfile',Authverification);
// router.post('/UpdateProfile',Authverification);

//Wish List 
// router.post('/SaveWishList',Authverification);
// router.post('/RemoveWishList',Authverification);
// router.get('/WishList',Authverification);

//Cart
// router.post('/SaveCartList',Authverification);
// router.post('/UpdateCartList/:productId',Authverification);
// router.post('/RemoveCartList',Authverification);
// router.get('/CartList',Authverification);

export default router;