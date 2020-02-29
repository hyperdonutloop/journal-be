const express = require('express');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(cors());
server.use(express.json());


server.use('/api/auth', authRouter);


server.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Welcome to the backend server 🤘🏼💀✨'
  })
});

module.exports = server;