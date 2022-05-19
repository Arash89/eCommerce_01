import { userModel } from '../mongoosModels.js'

export const addUser = (root, args, context) => {
  const { firstName, age, companyName } = args;
  const newUser = {
    firstName,
    age,
    companyName
  }

  // 61a1252f66e17953ca488c8b
  // TODO: Here I should add the newUser to mongoose
  const userMongoIns = new userModel({firstName, age, companyName})
  userMongoIns.save()

  // returns the new user for being shown in the Apollo Studio
  return newUser
}
