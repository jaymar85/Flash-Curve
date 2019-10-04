require("dotenv").config();
const bcrypt = require("bcryptjs");
const nodemailer = require('nodemailer');

// Transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    // port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
});

module.exports = {
    getSession: (req, res) => {
        if(req.session.user) {
            res.status(200).json(req.session.user);
        } else {
            res.sendStatus(200);
        }
    },
    register: async (req, res) => {
        const {username, password, email, first_name, last_name} = req.body;
        // console.log('hit auth', req.body)
        const db = req.app.get('db'); //gets the database instance and runs the sql file getUser
        const existingUser = await db.authorization.getUser([username]); //checks results if username is already taken
        if(existingUser[0]) {
            return res.status(409).send("Username taken");
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const registerUser = await db.authorization.registerUser(username, hash, email, first_name, last_name)
                // Mail option
                let mailOptions = {
                    from: 'Flash Curve <flashcurve19@gmail.com>', // sender address
                    to: email, //list of receivers
                    subject: 'Welcome to Flash Curve', // Subject line
                    html:  `<b>
                    <div>
                    <h1>Welcome ${first_name}!</h1>
                    <h4>Thank you for setting up your account with Flash Curve. Your account has been created and you can now start using our online features to help you with your studying.<h4>
                    </div>
                    </b>`
                }
                // req.session.user {}
                    // Send Mailer Method
                    transporter.sendMail(mailOptions)
                    .then(response => {
                        console.log('This email was sent!');
                    })
                    .catch(err => {
                        console.log('error', err)
                    })                
                    // res.status(200).json(req.session.user);                 
                // console.log(registerUser);
                const user = registerUser[0]; //this is our new users //previously on line 36    
                console.log(user);  
                req.session.user = { 
                user_id: user.user_id,
                username: user.username,
                // password: user.password,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,  
                mailOptions
            }
            res.status(200).json(req.session.user); 
        };    
    },
    login: async (req, res) => {
        const {username, password} = req.body;
        // console.log(username);
        const findUser = await req.app.get('db').authorization.getUser(username);
        const user = findUser[0];
        if(!user) {
            return res.status(401).json("Username incorrect");
        } else {
            const authorized = bcrypt.compareSync(password, user.hash);
            if(!authorized) {
                return res.status(403).json("Password incorrect");
            } else {
                req.session.user = {
                    user_id: user.user_id,
                    username: user.username,
                    // password: user.password,
                    email: user.email,
                    first_name: user.first_name,
                    last_name: user.last_name 
                    // password: user.hash //don't put passwords on session
                }
                // console.log(req.session.user);
                return res.status(200).json(req.session.user);
            }   
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.status(200).json("You have logged out!")
    }
}