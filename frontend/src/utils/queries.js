import { gql } from '@apollo/client';

export const GET_EVENT = gql`
  query GetEvent($id: ID!) {
    event(id: $id) {
      _id
      title
      description
      date
    }
  }
`;

// Define and export GET_EVENTS
export const GET_EVENTS = gql`
  query GetEvents {
    events {
      _id
      title
      description
      date
    }
  }
`;

// Define and export QUERY_EVENTS if needed
export const QUERY_EVENTS = gql`
  query QueryEvents {
    events {
      _id
      title
      description
      date
    }
  }
`;

// Other queries
export const GET_USERS = gql`
  query GetUsers {
    users {
      _id
      username
    }
  }
`;
