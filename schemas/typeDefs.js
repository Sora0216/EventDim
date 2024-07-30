const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        events: [Event!]
    }

    type Event {
        _id: ID!
        name: String!
        date: String!
        location: String!
        description: String!
        attendees: [Attendee!]
        schedule: [ScheduleItem!]
    }

    type Attendee {
        name: String!
        email: String!
    }

    type ScheduleItem {
        title: String!
        time: String!
        description: String!
    }

    type Auth {
        token: ID!
        user: User!
    }

    type Query {
        me: User
        events: [Event!]
        event(eventId: ID!): Event
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addEvent(name: String!, date: String!, location: String!, description: String): Event
        updateEvent(eventId: ID!, name: String!, date: String!, location: String!, description: String!): Event
        deleteEvent(eventId: ID!): Event
        addAttendee(eventId: ID!, name: String!, email: String!): Event
        removeAttendee(eventId: ID!, attendeeId: ID!): Event
        addScheduleItem(eventId: ID!, title: String!, time: String!, description: String!): Event
        updateScheduleItem(eventId: ID!, scheduleItemId: ID!, title: String!, time: String!, description: String!): Event
        deleteScheduleItem(eventId: ID!, scheduleItemId: ID!): Event
    }
`;

module.exports = typeDefs;