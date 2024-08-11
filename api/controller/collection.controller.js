import Collection from '../models/collection.model.js';
import { errorHandler } from '../utils/error.js';

export const getCollection = async (req, res, next) => {
  try {
    const collection = await Collection.find();
    if (!collection) {
        return next(errorHandler(404, 'Collection not found'));
    }
    res.status(200).json(collection);
  } catch (error) {
    next(error);
  }
};

export const createCollection = async (req, res, next) => {
    const { name, imageUrl } = req.body;
    if (!name || !imageUrl) {
        next(new Error('Name and imageUrl are required'));
    }
    if (name.length < 3) {
        next(new Error('Name must be at least 3 characters'));
    }
    if (!imageUrl.startsWith('http')) {
        return next(errorHandler(400, 'Image must be a valid URL!'));
    }
    try {
        const collection = new Collection({
            name,
            imageUrl
        });
        await collection.save();
        res.status(201).json({
            message: 'Collection created successfully',
            collection
        });
    } catch (error) {
        next(error);
    }
}