const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const configureMiddleware = require('./configure-middleware.js');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const songsRouter = require('../songs/songs-router.js');
const usersAuth = require('../users/userAuth-middleware.js');
const usersRouter = require('../users/users-router.js');

const server = express();

configureMiddleware(server);


server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.Router());

server.use('/api/auth', authRouter);
server.use('/api/songs', authenticate, songsRouter);
server.use('/api/users', usersAuth, usersRouter);

server.get('/', (req,res) => {
    res.json({
        api: "Welcome to Our Spotify Song Selector:",  id: 1, song_name: 'Blinding Lights', artist_name: 'The Weekend', duration: 3.21, genre: 'R&B/Soul', song_url: 'https://open.spotify.com/album/2ZfHkwHuoAZrlz7RMj0PDz',
        id: 2, song_name: 'The Box (Explicit)', artist_name: 'Roddy Rich', duration: 3.16, genre: 'Hip-Hop', song_url: 'https://open.spotify.com/artist/757aE44tKEUQEqRuT6GnEB',
        id: 3, song_name: 'You Should Be Sad (Explicit)', artist_name: 'Halsey', duration: 3.25, genre: 'Alternative/Indie', song_url: 'https://open.spotify.com/album/68enXe5XcJdciSDAZr0Alr?highlight=spotify:track:7lidXGPXPYLNThITAOTlkK',
        id: 4, song_name: 'Falling', artist_name: 'Trevor Daniel', duration: 2.39, genre: 'Pop', song_url: 'https://open.spotify.com/album/68enXe5XcJdciSDAZr0Alr?highlight=spotify:track:7lidXGPXPYLNThITAOTlkK',
        id: 5, song_name: 'Dont Start Now', artist_name: 'Dua Lipa', duration: 3.03, genre: 'Pop', song_url: 'https://open.spotify.com/album/0ix3XtPV1LwmZADsprKxcp?highlight=spotify:track:6WrI0LAC5M1Rw2MnX2ZvEg',
        id: 6, song_name: 'Yummy', artist_name: 'Justin Bieber', duration: 3.30, genre: 'Pop', song_url: 'https://open.spotify.com/album/1SN6N3fNkZk5oXQ9X46QZ3?highlight=spotify:track:41L3O37CECZt3N7ziG2z7l',
        id: 7, song_name: 'Life is Good (feat. Drake)(Explicit)', artist_name: 'Future', duration: 3.57, genre: 'Hip-Hop', song_url: 'https://open.spotify.com/album/5uCEoLCj3ZZZ1EtzQdQWVl?highlight=spotify:track:5yY9lUy8nbvjM1Uyo1Uqoc',
        id: 8, song_name: 'Rare', artist_name: 'Selena Gomez', duration: 3.40, genre: 'Pop', song_url: 'https://open.spotify.com/album/3YPFaTR7WMi1Hd4NVKdCJx?highlight=spotify:track:7HMmFQsKsljwTw8bS7lu19',    
        id: 9, song_name: 'Rendezvous', artist_name: 'Sarafina Ethereal', duration: 3.27, genre: 'R&B/Soul', song_url: 'https://open.spotify.com/album/71xnXGOJozRQUw6EjlaKri?highlight=spotify:track:11qftgeHzuChqZx7dKe1ut'   
    })
    });

module.exports = server;