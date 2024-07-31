const mongoose = require('mongoose');
const db = require('./config/connection');
const User = require('./models/User');
const Event = require('./models/Event');
const Review = require('./models/Review');

const seedDatabase = async () => {
  await mongoose.connect(db);

  // Clear existing data
  await User.deleteMany({});
  await Event.deleteMany({});
  await Review.deleteMany({});

  // Add sample users
  const user1 = await User.create({ username: 'user1', email: 'user1@example.com', password: 'password123' });
  const user2 = await User.create({ username: 'user2', email: 'user2@example.com', password: 'password123' });

  // Add sample events
  const event1 = await Event.create({ name: 'Event 1', date: '2024-12-01', location: 'Location 1', description: 'Description 1', createdBy: user1._id });
  const event2 = await Event.create({ name: 'Event 2', date: '2024-12-05', location: 'Location 2', description: 'Description 2', createdBy: user2._id });

  // Add sample reviews
  await Review.create({ rating: 5, comment: 'Great event!', event: event1._id, user: user1._id });
  await Review.create({ rating: 4, comment: 'Nice event!', event: event2._id, user: user2._id });

  console.log('Database seeded');
  process.exit(0);
};

seedDatabase();
