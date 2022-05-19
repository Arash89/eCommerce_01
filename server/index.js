import mongoose from 'mongoose';
import CustomEnv from "custom-env"
import { ApolloServer } from "apollo-server"

import { myLog } from "./myLib.js"
import { typeDefs } from './graphql/typeDefs.js'
import { resolvers } from "./graphql/resolvers.js";

CustomEnv.env()

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
})

const server = new ApolloServer({
  typeDefs,
  resolvers
});

myLog.orangeJ("Salam Arash: ", process.env.MONGODB_URI)

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
