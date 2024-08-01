import { gql } from '@apollo/client';

// Mutation for user signup
export const SIGNUP_USER = gql`
  mutation Signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

// Mutation for user login
export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

// Mutation to create an event
export const CREATE_EVENT = gql`
  mutation CreateEvent($title: String!, $date: String!, $description: String!) {
    createEvent(title: $title, date: $date, description: $description) {
      id
      title
      date
      description
    }
  }
`;

// Mutation to update an event
export const UPDATE_EVENT = gql`
  mutation UpdateEvent($id: ID!, $title: String, $date: String, $description: String) {
    updateEvent(id: $id, title: $title, date: $date, description: $description) {
      id
      title
      date
      description
    }
  }
`;

// Mutation to delete an event
export const DELETE_EVENT = gql`
  mutation DeleteEvent($id: ID!) {
    deleteEvent(id: $id) {
      id
      title
      date
      description
    }
  }
`;
