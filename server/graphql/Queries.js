import { companyModel, userModel } from '../mongoosModels.js'

export const getUser = async (root, { userId }, ctx) => {
  return userModel.findById(userId)
};

export const getUsers = async (root, args, ctx) => {
  return userModel.find()
};

export const getCompany = async (root, { companyId }, ctx) => {

  return companyModel.findById(companyId)
}

export const getCompanies = async (root, args, ctx) => {
  return companyModel.find()
}
