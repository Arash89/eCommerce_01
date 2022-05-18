// const { ApolloServer, gql } = require("apollo-server");
// const { myLog } = require("./myLib");
import { ApolloServer, gql } from "apollo-server"
import { myLog } from "./myLib.js"
import CustomEnv from "custom-env"

CustomEnv.env()

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type User {
      id: ID
      firstName: String
      age: Int
      companyName: ID
    }
    
    type Company {
      id: ID
      companyName: String
      description: String
    }
    
    type Query {
      hello: String
      users: [User]
      companies: [Company]
    }
    
    type Mutation {
      addUser(firstName: String!, age: Int, companyName: ID): User
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (root, args, context) => "Hello world Arash 6!"
  },
  Mutation: {
    addUser: (root, args, context) => {
      const { firstName, age, companyName } = args;
      const newUser = {
        firstName,
        age,
        companyName
      }

      // TODO: Here I should add the newUser to mongoose

      return newUser
    }
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
