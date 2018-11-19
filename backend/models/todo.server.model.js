import mongoose from 'mongoose';
var Schema = new mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  name: String,
  status: String
});
export default mongoose.model('Todo', Schema);