import { companyModel, userModel } from '../mongoosModels.js'

export const getUser = async (root, { userId }, ctx) => {
  const user = await userModel.findById(userId)
  const companyId = user.companyName
  const companyNameString = await companyModel.findById(companyId)

  return {id: userId, firstName: user.firstName, age: user.age, companyName: user.companyName, companyNameString}
}

export const getUsers = async (root, args, ctx) => {
  const allUsers = await userModel.find()

  return allUsers.map(user => getUser(root, {...args, userId: user.id}, ctx))
}

export const getCompany = async (root, { companyId }, ctx) => {

  return companyModel.findById(companyId)
}

export const getCompanies = async (root, args, ctx) => {
  return companyModel.find()
}
