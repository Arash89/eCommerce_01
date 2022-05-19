import { getCompanies, getCompany, getUser, getUsers } from "./Queries.js";
import { addUser, updateUser } from "./Mutations.js";

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    hello: (root, args, context) => "Hello world Arash 6!",
    getUser,
    getCompany,
    getUsers,
    getCompanies,
  }
  ,
  Mutation: {
    addUser,
    updateUser,
  }
};
