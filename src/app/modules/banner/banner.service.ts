import { TBanner } from './banner.interface';
import { Banner } from './banner.model';

const createBanner = async (payload: TBanner) => {
  const result = await Banner.create(payload);
  return result;
};

const getAllBanner = async () => {
  const result = await Banner.find().sort({ createdAt: -1 });
  return result;
};

const getActiveBanners = async () => {
  const result = await Banner.find({ isActive: true }).sort({ createdAt: -1 });
  return result;
};

const getSingleBanner = async (id: string) => {
  const result = await Banner.findById(id);
  return result;
};

const updateBanner = async (id: string, payload: Partial<TBanner>) => {
  const result = await Banner.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBanner = async (id: string) => {
  const result = await Banner.findByIdAndDelete(id);
  return result;
};

export const bannerServices = {
  createBanner,
  getAllBanner,
  getActiveBanners,
  getSingleBanner,
  updateBanner,
  deleteBanner,
};