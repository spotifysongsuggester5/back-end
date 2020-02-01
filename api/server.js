const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const configureMiddleware = require('./configure-middleware.js');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const songsRouter = require('../songs/songs-router.js');

const server = express();

configureMiddleware(server);


server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.Router());

server.use('/api/auth', authRouter);
server.use('/api/songs', authenticate, songsRouter);

server.get('/', (req,res) => {
    res.json({
        api: "Welcome to Our Spotify Song Selector"
    });
});
module.exports = server;