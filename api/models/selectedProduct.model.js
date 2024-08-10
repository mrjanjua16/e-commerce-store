const mongoose = require('mongoose');

const selectedProductSchema = new mongoose.Schema({
    userId: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'User', 
         required: true 
        },
    products: [{
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'Product' 
        }],
    },
    {timestamp: true}
);

const SelectedProduct = mongoose.model('SelectedProduct', selectedProductSchema);
module.exports = SelectedProduct;