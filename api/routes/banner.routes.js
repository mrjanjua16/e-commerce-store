import express from 'express';
import { createBanner, getBanners } from '../controller/banner.controller.js';

const router = express.Router();

router.post('/create', createBanner);
router.get('/get', getBanners);

export default router;