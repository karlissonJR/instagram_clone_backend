const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router()

routes.post('/user/new', UserController.create);

module.exports = routes;