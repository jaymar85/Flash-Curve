const bcrypt = require("bcryptjs");

module.exports = {
    register: async (req, res) => {
        const {username, password, email, first_name, last_name} = req.body;
        const db = req.app.get('db'); //gets the database instance and runs the sql file getUser
        const existingUser = await db.authorization.getUser([username]); //checks results if username is already taken
        if(existingUser[0]) {
            return res.status(409).send("Username taken");
        } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const registerUser = await db.authorization.registerUser(username, hash, email, first_name, last_name);
        const user = registerUser[0]; //this is our new users 
            req.session.user = { 
                user_id: user.user_id,
                username: user.username,
                // password: user.password,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name 
            };
            return res.status(200).json(req.session.user); 
        }
    },
    login: async (req, res) => {
        const {username, password} = req.body;
        const findUser = await req.app.get('db').authorization.getUser([username]);
        const user = findUser[0];
        if(!user) {
            return res.status(401).json("Username incorrect");
        } else {
            const authorized = bcrypt.compareSync(password, user.hash);
            if(!authorized) {
                return res.status(403).json("Password incorrect");
            } else {
                req.session.user = {
                    // user_id: user.user_id,
                    username: user.username,
                    password: user.hash
                }
                return res.status(200).json(req.session.user);
            }   
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.status(200).json("You have logged out!")
    }
}