import { gql } from "apollo-server"

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
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
      getUser(userId: ID): User 
      getCompany(companyId: ID): Company
      getUsers: [User]
      getCompanies: [Company]
    }
    
    type Mutation {
      addUser(firstName: String!, age: Int, companyName: ID): User
    }
`;
