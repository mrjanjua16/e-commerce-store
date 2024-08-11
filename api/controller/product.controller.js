import Product from '../models/product.model.js';
import { errorHandler } from '../utils/error.js';
import User from '../models/user.model.js';

export const createProduct = async (req, res, next) => {
    const {
        name,
        description,
        price,
        category,
        brand,
        stock,
        images,
        isFeatured,
        isActive
    } = req.body;

    const product = new Product({
        name,
        description,
        price,
        category,
        brand,
        stock,
        images,
        isFeatured,
        isActive
    });

    try {
        await product.save();

        res.status(201).json({
            message: 'Product created successfully',
            product
        });
    } catch (error) {
        next(error);
    }
}

export const getProducts = async (req, res, next) => {
    const {
        keyword,
        price,
        category,
        brand,
        stock,
        isFeatured,
        isActive
    } = req.body;

    try {
        const query = {};

        if (keyword) query.description = { $regex: keyword, $options: 'i' };
        if (price) query.price = { $lte: price };
        if (category) query.category = category;
        if (brand) query.brand = brand;
        if (stock) query.stock = { $lte: stock };
        if (isFeatured) query.isFeatured = isFeatured;
        if (isActive) query.isActive = isActive;

        console.log(query);

        const products = await Product.find(query).populate('category');

        console.log(products);

        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        } else {
            res.status(200).json(products);
        }

    } catch (error) {
        next(errorHandler(error.code || 500, error.message || 'Internal server error'));
    }
}

export const newArrival = async (req, res, next) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 }).limit(10);
        if (!products) {
            return res.status(404).json({ message: 'No products found' });
        }
        res.status(200).json(products);
    } catch (error) {
        next(errorHandler(error.code || 500, error.message || 'Internal server error'));
    }
}

export const getSelectedProducts = async (req, res, next) => {
    const { userId } = req.params;

    try {

        if (!userId) {
            const latestProducts = await Product.find().sort({ createdAt: -1 }).limit(5);
            return res.json(latestProducts);
        }

        const user = await User.findById(userId);

        if (user) {
            const { interestCategory } = user;

            if (!interestCategory || interestCategory.length === 0) {
                const latestProducts = await Product.find().sort({ createdAt: -1 }).limit(5);
                return res.json(latestProducts);
            }

            const products = await Product.find({ category: { $in: interestCategory } });
            return res.json(products);
        }

    } catch (error) {
        next(errorHandler(error.code || 500, error.message || 'Internal server error'));
    }
}