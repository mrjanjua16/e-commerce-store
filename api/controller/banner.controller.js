import Banner from "../models/banner.model.js";
import { errorHandler } from "../utils/error.js";

export const createBanner = async (req, res, next) => {
  const { title, description, imageUrl } = req.body;

  if (!title || !description || !imageUrl) {
    return next(errorHandler(400, "All fields are required!"));
  }
  if (title.length < 1 || title.length > 15) {
    return next(
      errorHandler(400, "Title must be between 1 and 15 characters!"),
    );
  }
  if (description.length < 1 || description.length > 100) {
    return next(
      errorHandler(400, "Description must be between 1 and 100 characters!"),
    );
  }
  if (!imageUrl.startsWith("http")) {
    return next(errorHandler(400, "Image must be a valid URL!"));
  }

  try {
    const newBanner = await Banner.create({ title, description, imageUrl });
    if (!newBanner) {
      return next(errorHandler(400, "Banner creation failed!"));
    }
    res.status(201).json({
      success: true,
      message: "Banner created successfully!",
      data: newBanner,
    });
  } catch (error) {
    next(error);
  }
};

export const getBanners = async (req, res, next) => {
  try {
    const activeBanners = await Banner.find({ active: true });
    if (!activeBanners) {
      return next(errorHandler(404, "No active banners found!"));
    }
    res.status(200).json({
      success: true,
      message: "Active banners fetched successfully!",
      data: activeBanners,
    });
  } catch (error) {
    return next(errorHandler(500, "Internal server error!"));
  }
};
