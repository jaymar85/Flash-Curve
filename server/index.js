require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const {CONNECTION_STRING, SERVER_PORT,  SESSION_SECRET} = process.env;
// Controllers
const authController = require("./controllers/authController");

app.use(express.json());

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Connected to database");
})

app.use(session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true, 
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

// Endpoints
app.post('/auth/register', authController.register);
// app.post('/auth/login', authController.login);

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on ${SERVER_PORT}`)
});