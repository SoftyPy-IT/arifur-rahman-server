import { z } from 'zod';

export const createBannerValidationSchema = z.object({
  body: z.object({
    thumbnailImage: z.string({
      required_error: 'Thumbnail image is required',
    }),
    title: z.string(),
    toptitle: z.string(),
    bottomtitle: z.string(),
    isActive: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

export const updateBannerValidationSchema = z.object({
  body: z.object({
    thumbnailImage: z.string().optional(),
    title: z.string().optional(),
    toptitle: z.string().optional(),
    bottomtitle: z.string().optional(),
    isActive: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

export const bannerValidations = {
  createBannerValidationSchema,
  updateBannerValidationSchema,
};