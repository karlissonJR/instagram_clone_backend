const express = require('express');

const routes = express.Router()

routes.get('/', (request, response) => {
    return response.send('Hello Instagram Clone!');
})

module.exports = routes;