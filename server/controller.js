const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');

        let newUser = await db.register({username, password: hash});
        newUser = newUser[0];
        
    }
}