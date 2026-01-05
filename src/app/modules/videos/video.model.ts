// server/videos/video.model.ts
import { model, Schema } from 'mongoose';

export type TVideo = {
  date: string;
  videoUrl: string;
  title?: string;
  videoType: 'youtube' | 'facebook';
  thumbnail?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const videoSchema = new Schema<TVideo>(
  {
    date: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    videoType: {
      type: String,
      enum: ['youtube', 'facebook'],
      required: true,
      default: 'youtube',
    },
    thumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Video = model<TVideo>('Video', videoSchema);