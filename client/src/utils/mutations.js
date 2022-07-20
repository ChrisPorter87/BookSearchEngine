import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook(
    $authors: [String]
    $description: String
    $bookId: String
    $image: String
    $title: String
  ) {
    saveBook(
      input: {
        authors: $authors
        description: $description
        bookId: $bookId
        image: $image
        # link: "test1",
        title: $title
      }
    ) {
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation Mutation($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
