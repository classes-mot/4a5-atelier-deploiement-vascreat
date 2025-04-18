import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

const message = mongoose.model('Message', messageSchema);
export default message;