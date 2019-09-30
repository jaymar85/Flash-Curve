require("dotenv").config();
const nodemailer = require('nodemailer');

// Step 1 - to send any kind of email we will need a transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});

// Step 2 - things I would like sent in my email
let mailOption = {
    from: 'jermark851@gmail.com',
    to: 'jermark851@gmail.com',
    subject: 'Testing and Testing',
    text: 'If you are reading this. My nodemailer works!'
};

// Step 3 
transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent!!!!');
    }
});