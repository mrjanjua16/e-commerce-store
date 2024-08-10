import Category from "../models/category.model.js";

export const createCategory = async (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const uniqueCategory = await Category.findOne({ name });
        if (uniqueCategory) {
            return res.status(400).json({ message: "Category already exists" });
        }
        
        const newCategory = await Category.create({ name, description });
        if (!newCategory) {
            return res.status(500).json({ message: "Category creation failed" });
        }
        res.status(201).json({ message: "Category created successfully", category: newCategory });
    } catch (error) {
        next(error);
    }
};

export const getCategories = async (req, res) => {
    const { name } = req.body;
    try {
        if (!name) {
            const categories = await Category.find();
            return res.status(200).json(categories);
        }
        const query = { name: { $regex: name, $options: "i" } };
        const categories = await Category.find(query);
        if (!categories) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
};