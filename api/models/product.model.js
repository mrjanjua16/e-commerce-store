import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
         type: String, 
         required: true 
    },
    description: { 
        type: String 
    },
    price: { 
        type: Number, 
        required: true 
    },
    category: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category', 
        required: true 
    },
    brand: { 
        type: String 
    },
    stock: { 
        type: Number, 
        default: 0,
        
    },
    images: [{ 
        type: String 
    }],
    isFeatured: { 
        type: Boolean, 
        default: false 
    },
    isActive: { 
        type: Boolean, 
        default: true 
    },
    },
    {timestamp: true}
);

const Product = mongoose.model('Product', productSchema);
export default Product;
