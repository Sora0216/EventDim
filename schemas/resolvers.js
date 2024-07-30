const { AuthenticationError } = require('apollo-server-express');
const Event = require('../models/Event');
const User = require('../models/User');
const Review = require('../models/Review');
const { signToken } = require('../server/utils/auth');

const resolvers = {
    Query: {
        me: async (parent,args, context) => {
            if (context.user) {
                return User.findById(context.user._id).populate('events');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        events: async () => {
            return Event.find();
        },
        event: async (parent, { eventId }) => {
            return Event.findById(eventId);
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addEvent:async (parent, { name, date, location, description }, context) => {
            if(context.user) {
                const event = await Event.create({ name, date, location, description });
                await User.findByIdAndUpdate(context.user._id, { $push: { events: event._id }});
                return event;
            }
            throw new AuthenticationError('You need to be logged in');
        },
        updateEvent: async (parent, { eventId, name, date, location, description }, context) => {
            if (context.user) {
                return Event.findByIdAndUpdate(eventId, { name, date, location, description }, {new: true});
            }
            throw new AuthenticationError('You need to be logged in');
        },
        deleteEvent: async (parent, { eventId }, context) => {
            if (context.user) {
                return Event.findByIdAndDelete(eventId);
            }
            throw new AuthenticationError('You need to be logged in');
        },
        addAttendee: async (parent, { eventId, name, email }, context) => {
            if (context.user) {
                return Event.FindByIdAndUpdate(eventId, { $push: { attendees: { name, email }}}, { new: true});
            }
            throw new AuthenticationError('You need to be logged in');
        },
        removeAttendee: async (parent, { eventId, attendeeId }, context) => {
            if (context.user) {
                return Event.FindByIdAndUpdate(eventId, { $pull: { attendees: {_id: attendeeId }}}, { new: true });
            }
            throw new AuthenticationError('You need to be logged in');
        },
        addScheduleItem: async (parent, { eventId, title, time, description }, context) => {
            if (context.user) {
                return Event.findByIdAndUpdate(eventId, { $push: { schedule: [ title, time, description]}}, { new: true});
            }
            throw new AuthenticationError('You need to be logged in');
        },
        updateScheduleItem: async (parent, { eventId, addScheduleItemId, title, time, description }, context) => {
            if (context.user) {
                return Event.findByIdAndUpdate(
                    eventId,
                    { $set: { 'schedule.$[item]': { title, time, description}}},
                    { arrayFilters: [{ 'item._id': addScheduleItemId }], new: true}
                );
            }
            throw new AuthenticationError('You need to be logged in');
        },
        deleteScheduleItem: async (parent, { eventId, addScheduleItemId }, context) => {
            if (context.user) {
                return Event. findByIdAndUpdate(eventId, { $pull: { schedule: { _id: addScheduleItemId }}}, {new:true});
            }
            throw new AuthenticationError('You need to be logged in');
        },
        },
    };