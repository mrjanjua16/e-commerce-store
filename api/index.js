import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";

import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import categoryRoutes from './routes/category.routes.js';
import bannerRoutes from './routes/banner.routes.js';
dotenv.config();


mongoose
    .connect(process.env.MONGO)
    .then(
        () => {
            console.log("Mongodb is connected");
        }
    )
    .catch(
        (err) => {
            console.log(err);
        }
    );

const app = express();

app.use(express.json());

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/banner', bannerRoutes);


app.use(
    (err, req, res, next) => {
        const statusCode = err.statusCode || 500;
        const message = err.message || "Internal Server Error";
        const errorDetails = {
            message: err.message,
            stack: err.stack,
            name: err.name
        };
        res.status(statusCode).json({
            success: false,
            statusCode,
            message,
            error: errorDetails
        });
    }
);