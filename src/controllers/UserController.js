const User = require('../models/User');

module.exports = {
    async create(request, response) {
        try{
            const user = await User.create(request.body);
            return response.json(user);
        }
        catch (error) {
            return response.status(400).send({ error: 'Registration failed'});
        }
    }
}