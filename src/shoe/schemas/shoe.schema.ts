import * as mongoose from 'mongoose';

export const ShoeSchema = new mongoose.Schema({
  brand: String,
  color: String,
  type: String,
  material: String,
  wearcolors: [String],
  price: Number,
  sale: Date,
});