'use strict';
const serverless  = require('serverless-http');
const express     = require('express');
const app         = express();
const routers     = require('./routes');

app.use(express.json());
app.use(routers);

app.get('/', (req, res) => {
  res.send('Hola Mundo con Express.js!');
});

module.exports.generic = serverless(app);
