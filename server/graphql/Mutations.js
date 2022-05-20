import { userModel, companyModel } from '../mongoosModels.js'
import { getUser } from "./Queries.js";
import { cloneDeep } from "lodash-es"
import { myLog } from "../myLib.js";

export const addUser = async (root, args, ctx) => {
  const { firstName, age, companyName } = args;
  const newUser = {
    firstName,
    age,
    companyName
  }

  // 61a1252f66e17953ca488c8b
  // TODO: Here I should add the newUser to mongoose
  const userMongoIns = new userModel({firstName, age, companyName})
  await userMongoIns.save()

  myLog.pinkJ(userMongoIns)

  // returns the new user for being shown in the Apollo Studio
  return getUser(root,{userId: userMongoIns._id}, ctx)
}

export const updateUser = async (root, args, ctx) => {
  const { userId, firstName, age, companyName } = args;
  const userForUpdate = userModel.findById(userId)

  await userForUpdate.update({
    firstName: firstName ? firstName : userForUpdate.firstName,
    age: age ? age : userForUpdate.age,
    companyName: companyName ? companyName : userForUpdate.companyName
  })

  return getUser(root, {userId}, ctx)
}

export const addCompany = (root, args, context) => {
  const { companyName, description } = args;
  const newCompany = {
    companyName,
    description
  }

  const companyMongoIns = new companyModel(newCompany)
  companyMongoIns.save()

  return companyMongoIns
}

export const updateCompany = async (root, args, ctx) => {
  const { companyId, companyName, description } = args;
  const companyForUpdate = companyModel.findById(companyId)

  await companyForUpdate.update({
    companyName: companyName ? companyName : companyForUpdate.companyName,
    description: description ? description : companyForUpdate.description
  })

  return companyModel.findById(companyId)
}

export const removeCompany = async (root, args, ctx) => {
  const { companyId } = args
  const companyForRemove = await companyModel.findById(companyId)
  const company = cloneDeep(companyForRemove)

  companyForRemove.deleteOne()
  return company
}

export const removeUser = async (root, args, ctx) => {
  const { userId } = args
  const userForRemove = await userModel.findById(userId)
  // const user = cloneDeep(userForRemove)
  const user = await getUser(root, { userId }, ctx)

  userForRemove.deleteOne()
  return user
}
