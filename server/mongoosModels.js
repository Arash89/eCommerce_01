import mongoose from 'mongoose';

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String },
  age: { type: Number },
  companyName: { type: String }
})

export const userModel = mongoose.model('users', userSchema);
