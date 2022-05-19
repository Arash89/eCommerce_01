// const { ApolloServer, gql } = require("apollo-server");
// const { myLog } = require("./myLib");
import mongoose from 'mongoose';

import { ApolloServer } from "apollo-server"
import { myLog } from "./myLib.js"
import CustomEnv from "custom-env"
import { addUser } from './graphql/Mutations.js'
import { typeDefs } from './graphql/typeDefs.js'
import { getCompanies, getCompany, getUser, getUsers } from './graphql/Queries.js'

CustomEnv.env()

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
})

// Provide resolver functions for your schema fields
const resolvers = {
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
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

myLog.orangeJ("Salam Arash: ", process.env.MONGODB_URI)

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
