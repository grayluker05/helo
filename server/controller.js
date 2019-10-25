const bcrypt = require('bcryptjs');

module.exports = {
    login: async(req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');

        let foundUser = await db.check_username(username);
        foundUser = foundUser[0]
        if(!foundUser){
            res.status(401).send('Username does not exist')
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password)

        if(authenticated){
            delete foundUser.password;
            req.session.use = foundUser;
            res.status(202).send(req.session.user);
        } else {
            res.status(401).send('Password is incorrect')
        }
    },

    register: async(req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');

        let newUser = await db.register({username, password: hash});
        newUser = newUser[0];
        res.status(200).send(req.session.user);
    }
}