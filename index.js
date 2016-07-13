const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

// App Setup
// Middleware that all requests will be passed through
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port, (err) => {
  if (err) {
    console.log('Error in starting server: ', err);
  } else {
    console.log('Server now listening on:', port);
  }
});