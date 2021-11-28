import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  buffer: {
    type: Buffer,
    required: true,
  },
});

const Image = mongoose.model('Image', imageSchema);
export default Image;
