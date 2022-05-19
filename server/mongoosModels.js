import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  age: Number,
  companyName: String
})

export const userModel = mongoose.model('users', userSchema);


const companySchema = new Schema({
  companyName: String,
  description: String,
})

export const companyModel = mongoose.model('companies', companySchema);

