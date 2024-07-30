const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./server/utils/auth');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const dbURI = require('./config/keys').mongoURI;

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware,
    });

    await server.start();
    server.applyMiddleware({ app });

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
}

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
    startApolloServer().then(() => {
        app.listen(PORT, () => {
            console.log('🌍 Now listening on localhost:${PORT}');
            console.log('Use GraphQL at http://localhost:${PORT}${server.graphqlPath}');
        });
    });
});