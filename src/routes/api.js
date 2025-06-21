
import express from 'express';
import { ProductBrandList } from '../controllers/ProductController.js';
const router = express.Router();

router.get('/ProductBrandList', ProductBrandList)

export default router;