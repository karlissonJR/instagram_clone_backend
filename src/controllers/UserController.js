const User = require('../models/User');

module.exports = {
    async create(request, response) {

        const { email } = request.body;

        try{

            if(await User.findOne({ email }))
                return response.status(400).send({ error : 'Email Already exists'});

            const user = await User.create(request.body);

            user.password = undefined;

            return response.json(user);
        }
        catch (error) {
            return response.status(400).send({ error: 'Registration failed'});
        }
    }
}