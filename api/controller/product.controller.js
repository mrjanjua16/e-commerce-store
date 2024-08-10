import Product from '../models/product.model.js';
import { errorHandler } from '../utils/error.js';

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
    } = req.query;
    
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