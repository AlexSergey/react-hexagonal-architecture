const path = require('node:path');
const express = require('express');
const jsonServer = require('json-server');
const demodata = require('./db.json');
const routes = require('./routes.json');

const router = jsonServer.router(demodata); // Express router
const server = jsonServer.create(); // Express server

server.use('/static', express.static(path.join(__dirname, 'public')));

// Avoid CORS issue
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use(jsonServer.rewriter(routes));
server.use(router);

server.listen(3004);
