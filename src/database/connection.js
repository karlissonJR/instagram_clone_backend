const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://localhost:27017/instagram', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;