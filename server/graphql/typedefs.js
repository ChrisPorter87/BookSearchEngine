const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int
  }
  type Book {
    bookId: String
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    getSingleUser(usernmae: String!): User
    me: User
  }
  input BookInput {
    bookId: String
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    removeBook(bookId: String!): User
  }
`;
module.exports = typeDefs;
