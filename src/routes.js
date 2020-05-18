const express = require('express');

const UserController = require('./controllers/UserController');
const AuthenticateController = require('./controllers/AuthenticateController');

const routes = express.Router()

routes.post('/user/new', UserController.create);
routes.post('/authenticate', AuthenticateController.authenticate);

module.exports = routes;