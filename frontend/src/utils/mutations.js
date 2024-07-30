import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
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

export const ADD_EVENT = gql`
  mutation addEvent($title: String!, $description: String, $date: String!) {
    addEvent(title: $title, description: $description, date: $date) {
      _id
      title
      description
      date
    }
  }
`;

export const ADD_ACTIVITY = gql`
  mutation addActivity($eventId: ID!, $name: String!, $startTime: String!, $endTime: String!) {
    addActivity(eventId: $eventId, name: $name, startTime: $startTime, endTime: $endTime) {
      _id
      name
      startTime
      endTime
    }
  }
`;
