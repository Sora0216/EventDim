const mongoose = require('mongoose');

const dbURI = require('./keys').mongoURI;

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });

module.exports = mongoose.connection;
