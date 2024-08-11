import mongoose from 'mongoose';

const CollectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Collection = mongoose.model('Collection', CollectionSchema);

export default Collection;