import express from 'express';
import { bannerControllers } from './banner.controller';

const router = express.Router();

router.post('/', bannerControllers.createBanner);
router.get('/', bannerControllers.getAllBanner);
router.get('/:id', bannerControllers.getSingleBanner);
router.delete('/:id', bannerControllers.deleteBanner);
router.patch('/:id', bannerControllers.updateBanner);

export const bannerRoutes = router;