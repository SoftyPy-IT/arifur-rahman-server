import { Schema, model } from 'mongoose';
import { TBanner } from './banner.interface';

const bannerSchema = new Schema<TBanner>(
  {
    thumbnailImage: {
      type: String,
      required: [true, 'Thumbnail image is required'],
    },
    title: {
      type: String,
      // required: [true, 'Title is required'],
    },
    toptitle: {
      type: String,
      // required: [true, 'Top title is required'],
    },
    bottomtitle: {
      type: String,
      // required: [true, 'Bottom title is required'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Banner = model<TBanner>('Banner', bannerSchema);