import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { bannerServices } from './banner.service';
import sendResponse from '../../utils/sendResponse';

const createBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await bannerServices.createBanner(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Banner created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await bannerServices.getAllBanner();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Banners retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await bannerServices.getSingleBanner(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Banner retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await bannerServices.deleteBanner(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Banner deleted successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateBanner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await bannerServices.updateBanner(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Banner updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const bannerControllers = {
  getAllBanner,
  getSingleBanner,
  deleteBanner,
  updateBanner,
  createBanner,
};