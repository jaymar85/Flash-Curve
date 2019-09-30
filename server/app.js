/////////////// NodeMailer ////////////////
// NodeMailer imports
require("dotenv").config();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

// Transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
});

// Mail option
let mailOptions = {
    from: '"Flash Curve" <flashcurve19@gmail.com>', // sender address
    to: 'madelyn.arsenault@gmail.com', //list of receivers
    subject: 'Welcome to Flash Curve', // Subject line
    html:  `<h1>Welcome Mads!</h1>
    <h4>Thank you for setting up your account with Flash Curve. Your account has been created and you can now start using our online features to help you with your studying.<h4>`
};

// Send Mailer Method
transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        return console.log(error);
    }
    console.log('This email was sent!');
    console.log(info);
});