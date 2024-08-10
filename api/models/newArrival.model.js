import mongoose from 'mongoose';

const newArrivalsSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
    },
    { timestamp: true }
);

const NewArrival = mongoose.model('NewArrival', newArrivalsSchema);
export default NewArrival;